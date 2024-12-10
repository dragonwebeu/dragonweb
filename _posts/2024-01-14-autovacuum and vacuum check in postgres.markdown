---
layout: detail
title: autovacuum and vacuum check in postgres
date: 2024-01-14 00:00:00 +0000
categories: postgres
excerpt_separator: <!--more-->
---
autovacuum and vacuum check in postgres
<!--more-->

```sql
select relname,last_vacuum, last_autovacuum, last_analyze, vacuum_count, autovacuum_count,
last_autoanalyze from pg_stat_user_tables ORDER BY last_vacuum DESC,  last_autovacuum DESC NULLS LAST;
```

autovacuum settings
```
SELECT name, setting, unit, short_desc
FROM pg_settings
WHERE name IN (
'autovacuum_max_workers',
'autovacuum_analyze_scale_factor',
'autovacuum_naptime',
'autovacuum_analyze_threshold',
'autovacuum_analyze_scale_factor',
'autovacuum_vacuum_threshold',
'autovacuum_vacuum_scale_factor',
'autovacuum_vacuum_threshold',
'autovacuum_vacuum_cost_delay',
'autovacuum_vacuum_cost_limit',
'vacuum_cost_limit',
'autovacuum_freeze_max_age',
'maintenance_work_mem',
'vacuum_freeze_min_age');
```

```
ALTER TABLE IF EXISTS public.my_table SET (
    autovacuum_enabled = false
);

```

## Wraparound risk
```
SELECT  
c.oid::regclass as table_name,
greatest(age(c.relfrozenxid),age(t.relfrozenxid)) as "TXID age",
(greatest(age(c.relfrozenxid),age(t.relfrozenxid))::numeric/1000000000*100)::numeric(4,2) as "% WRAPAROUND RISK"
FROM pg_class c
LEFT JOIN pg_class t ON c.reltoastrelid = t.oid
WHERE c.relkind IN ('r', 'm')
ORDER BY 2 DESC;
```