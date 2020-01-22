### REPORT

## TEST_FIX

SELECT count(distinct userId) FROM usersession where useraction.application IN ("ESSWEB_TESTFIX") AND userType="REAL_USER"

SELECT count(distinct userId) FROM usersession where useraction.application in ("ESSWEB_TESTFIX") AND userType="REAL_USER" and useraction.name startswith 'Loading of page /TESTFIX/ESSWEB/EPS5/NTHN/GC70/Dashboard/DashboardMain'

SELECT count(distinct userId) FROM usersession where useraction.application in ("ESSWEB_TESTFIX") AND userType="REAL_USER" and useraction.name startswith 'Loaded PlannedJobsearchEffortFetchContent on page /TESTFIX/ESSWEB/EPS5/NTHN/GC70/Dashboard/DashboardMain'


SELECT count(distinct userId) FROM usersession where useraction.application in ("ESSWEB_TESTFIX") AND userType="REAL_USER" and useraction.name startswith 'Clicked PlannedJobsearchEffortFetchContent on page /TESTFIX/ESSWEB/EPS5/NTHN/GC70/Dashboard/DashboardMain'





## PROD

SELECT count(distinct userId) FROM usersession where useraction.application IN ("EMP - ESSWeb") AND userType="REAL_USER"

SELECT count(distinct userId) FROM usersession where useraction.application in ("EMP - ESSWeb") AND userType="REAL_USER" and useraction.name startswith 'Loading of page ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'

## PlannedJobsearchEffortFetchContent 

SELECT count(distinct userId) FROM usersession where useraction.application in ("EMP - ESSWeb") AND userType="REAL_USER" and useraction.name startswith 'Loaded PlannedJobsearchEffortFetchContent on page ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'

SELECT count(distinct userId) FROM usersession where useraction.application in ("EMP - ESSWeb") AND userType="REAL_USER" and useraction.name startswith 'Clicked PlannedJobsearchEffortFetchContent on page ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'





### ORIGINAL

// user count ESSWeb Active usersession

SELECT count(distinct userId) FROM usersession where useraction.application IN ("ESSWEB_DEV")

// FUNNEL example

SELECT FUNNEL(useraction.application in ("EMP - ESSWeb") as 'Total sessions', useraction.name startswith 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain' as 'Dashboard Main', useraction.name STARTSWITH 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/ProviderDashboardDiaryWidget/EditCheckinRowModal' as 'Diary Widget') from usersession

// DASHBOARD Load

SELECT count(distinct userId) from usersession where useraction.application in ("ESSWEB_DEV") and useraction.name startswith 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'








