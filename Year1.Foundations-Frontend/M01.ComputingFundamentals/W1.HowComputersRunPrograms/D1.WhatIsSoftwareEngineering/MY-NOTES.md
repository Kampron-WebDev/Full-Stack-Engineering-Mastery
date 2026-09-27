# My Notes

1.Javascript was expecting string literals, not single quotes 2. Arrays uses length not size 3. Since there are literal strings there is no need for the + sign for concatenating 4. count and list require ${} around them since they are variables

## Architecture question (my answer)

1. Users and what each needs

- Teachers
  - Need to mark each student as present/absent quickly on a phone.
  - Need a simple interface that works fast during class.
  - Might need to see a class list and the attendance history for that day.

- Parents
  - Need to check whether their child was at school.
  - Need a simple, private view of attendance for their own child only.
  - May need a basic login and easy mobile access.

- Head teacher
  - Needs a weekly summary of attendance for classes, students, and overall school trends.
  - Needs reports that are accurate and easy to read.
  - May need to spot patterns like frequent absences.

- Optional admin/system owner
  - Needs to manage students, classes, teacher accounts, and permissions.

2. Frontend(s), backend and database

```text
                 +-------------------------+
                 |  Teacher Mobile App     |
                 |  - login                |
                 |  - mark attendance      |
                 |  - class roster         |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 |  Parent Web/Mobile App  |
                 |  - login                |
                 |  - view child status    |
                 |  - attendance history   |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 |   API / Backend         |
                 |   - auth                |
                 |   - validate teacher    |
                 |   - submit attendance   |
                 |   - fetch child record  |
                 |   - generate weekly rep |
                 +-----------+-------------+
                             |
                             v
                 +-------------------------+
                 |   Database              |
                 |   - students            |
                 |   - classes             |
                 |   - teachers            |
                 |   - attendance records  |
                 |   - parent-child links  |
                 +-------------------------+
```

A simple real-world version might have:

- Teacher app for phones
- Parent portal/app for checking attendance
- One backend service handling authentication, attendance logic, and reports
- A database storing student, class, teacher, and attendance records

3. Problems that could happen in production and one idea to handle each

- No internet or poor signal during class
  - Problem: A teacher may not be able to mark attendance in real time.
  - Idea: Allow offline saving in the mobile app, then sync when connection returns. Show a clear "pending sync" status.

- Wrong child marked as present/absent
  - Problem: A teacher might tap the wrong student or a student may be in the wrong class group.
  - Idea: Use a class roster with clear student names, photos, and confirmation before saving. Add a review step or admin audit trail.

- Privacy and data exposure
  - Problem: Parents should only see their own child, not other students’ records.
  - Idea: Use role-based access control and strict permissions. Only show each parent the correct child records, and encrypt sensitive data.

- Duplicate or late submissions
  - Problem: The same attendance record might be submitted twice.
  - Idea: Add a unique record per student per date/class, and protect against duplicates in the backend.

- Report errors
  - Problem: A weekly report could be wrong if data is missing or stale.
  - Idea: Validate attendance data, show status if sync is incomplete, and make the report generated from the database rather than a local phone.

## Quiz: my answers before checking

1.Programming is writing instructions a computer can execute whiles software engineering is the programming integrated overtime, that creating a software that works fine, can be easily maintained and changeable by teams overtime.
2.Requirement -> Design -> Implementation -> Testing -> Deployment -> Maintenance
3.Maintenance
4.Ariane 5 rocket of 1996 exploded 37 seconds after launch because a reused ode from an older rocket converted a 64-bit decimal number to 16-bit integer 5. Backend 6. Programming that has gone through multiple SDLC overtime.

## Reflection

**Explain it to a 10-year-old:** Software Engineering is the process of writing clean and well designed programs working together (software) to deliver a result or perform a specific task or tasks. This software should be able to work for a long time, easily maintained and changeable if the need arises. To ensure all these is ensured , every software development goes through the software development life cycle; Requirement -> Design -> Implementation -> Testing -> Deployment -> Maintenance.

**What surprised me:** Tiny bugs and incomplete work leading to great and expensive misfortunes.

**Still fuzzy:** Some of the exercises required me to think through hard because I'm now adjusting to Javascript. But its all good.
