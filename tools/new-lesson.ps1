<#
.SYNOPSIS
  Creates a new day-lesson folder from tools/templates/lesson.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File tools\new-lesson.ps1 `
      -Path "Year1.Foundations-Frontend\M01.ComputingFundamentals\W2.TerminalAndJavaScriptSurvivalKit\D1.TheTerminal"

  Then rename Exercises\01_Exercise to something meaningful, copy it for more
  exercises, and add a Debugging\01_Bug folder (same shape as an exercise).
#>
param([Parameter(Mandatory)][string]$Path)
$ErrorActionPreference = 'Stop'
$root     = Split-Path -Parent $PSScriptRoot
$template = Join-Path $PSScriptRoot 'templates\lesson'
$dest     = if ([IO.Path]::IsPathRooted($Path)) { $Path } else { Join-Path $root $Path }

if (Test-Path $dest) { throw "Already exists: $dest" }
New-Item -ItemType Directory -Force $dest | Out-Null
Copy-Item (Join-Path $template '*') $dest -Recurse
New-Item -ItemType Directory -Force (Join-Path $dest 'Debugging') | Out-Null
Copy-Item (Join-Path $template 'Exercises\01_Exercise') (Join-Path $dest 'Debugging\01_Bug') -Recurse

& (Join-Path $PSScriptRoot 'sync-vscode.ps1')
Write-Host "Created $dest" -ForegroundColor Green
