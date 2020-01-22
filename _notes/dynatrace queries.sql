### DASHBOARD

// user count ESSWeb Active usersession

SELECT count(distinct userId) FROM usersession where useraction.application IN ("ESSWEB_DEV")

// FUNNEL example

SELECT FUNNEL(useraction.application in ("EMP - ESSWeb") as 'Total sessions', useraction.name startswith 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain' as 'Dashboard Main', useraction.name STARTSWITH 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/ProviderDashboardDiaryWidget/EditCheckinRowModal' as 'Diary Widget') from usersession


SELECT count(distinct userId) from usersession where useraction.application in ("ESSWEB_DEV") and useraction.name startswith 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'








### SNIPPET PROD ### 22/1/2020 between midnight and 11:59pm

https://dynatrace.employment.gov.au/e/4806168e-8b0f-4d88-bbef-6214f4631f57/api/v1/userSessionQueryLanguage/table?query=
** QUERY **
&startTimestamp=1580648400000&endTimeStamp=1581037199000&explain=false&api-token=IMBhKKA_RJ-0Ol1DMox5t

* Changed timestamp to 3 Feb to 7 Feb 
* Change queries with wildcard Contract, Org, Site

### END SNIPPET ###

## Count of unique users - WORKS

https://dynatrace.employment.gov.au/e/4806168e-8b0f-4d88-bbef-6214f4631f57/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application IN ("EMP - ESSWeb") AND userType="REAL_USER"&&startTimestamp=1580648400000&endTimeStamp=1581037199000&explain=false&api-token=IMBhKKA_RJ-0Ol1DMox5t

## Count of unique users visiting Dashboard - WORKS

https://dynatrace.employment.gov.au/e/4806168e-8b0f-4d88-bbef-6214f4631f57/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application in ("EMP - ESSWeb") AND userType="REAL_USER" and useraction.name startswith 'Loading of page ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'&&startTimestamp=1580648400000&endTimeStamp=1581037199000&explain=false&api-token=IMBhKKA_RJ-0Ol1DMox5t

## Count of unique users who have LOADED PlannedJobsearch (Note - change to [Contract]/[Organisation]/[Site]/ on PROD) - WORKS

https://dynatrace.employment.gov.au/e/4806168e-8b0f-4d88-bbef-6214f4631f57/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application in ("EMP - ESSWeb") AND userType="REAL_USER" and useraction.name startswith 'Loaded PlannedJobsearchEffortFetchContent on page ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'&&startTimestamp=1580648400000&endTimeStamp=1581037199000&explain=false&api-token=IMBhKKA_RJ-0Ol1DMox5t


## Count of unique users who have CLICKED PlannedJobsearch - WORKS

https://dynatrace.employment.gov.au/e/4806168e-8b0f-4d88-bbef-6214f4631f57/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application in ("EMP - ESSWeb") AND userType="REAL_USER" and useraction.name startswith 'Clicked PlannedJobsearchEffortFetchContent on page ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain'&&startTimestamp=1580648400000&endTimeStamp=1581037199000&explain=false&api-token=IMBhKKA_RJ-0Ol1DMox5t








### SNIPPET LOWER ### 22/1/2020 between midnight and 11:59pm

https://dynatrace.employment.gov.au/e/a54fd809-825f-489b-8235-93b7b086f055/api/v1/userSessionQueryLanguage/table?query=
** QUERY **
&startTimestamp=1579611600000&endTimeStamp=1579697999000&explain=false&api-token=bqx7G5oVR3uQPNXfo3ykD

### END SNIPPET ###


## Count of unique users - WORKS

https://dynatrace.employment.gov.au/e/a54fd809-825f-489b-8235-93b7b086f055/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application IN ("ESSWEB_TESTFIX") AND userType="REAL_USER"&startTimestamp=1579611600000&endTimeStamp=1579697999000&explain=false&api-token=bqx7G5oVR3uQPNXfo3ykD

## Count of unique users visiting Dashboard - WORKS

https://dynatrace.employment.gov.au/e/a54fd809-825f-489b-8235-93b7b086f055/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application in ("ESSWEB_TESTFIX") AND userType="REAL_USER" and useraction.name startswith 'Loading of page /TESTFIX/ESSWEB/EPS5/NTHN/GC70/Dashboard/DashboardMain'&startTimestamp=1579611600000&endTimeStamp=1579697999000&explain=false&api-token=bqx7G5oVR3uQPNXfo3ykD

## Count of unique users who have LOADED PlannedJobsearch (Note - change to [Contract]/[Organisation]/[Site]/ on PROD) - WORKS

https://dynatrace.employment.gov.au/e/a54fd809-825f-489b-8235-93b7b086f055/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application in ("ESSWEB_TESTFIX") AND userType="REAL_USER" and useraction.name startswith 'Loaded PlannedJobsearchEffortFetchContent on page /TESTFIX/ESSWEB/EPS5/NTHN/GC70/Dashboard/DashboardMain'&startTimestamp=1579611600000&endTimeStamp=1579697999000&explain=false&api-token=bqx7G5oVR3uQPNXfo3ykD


## Count of unique users who have CLICKED PlannedJobsearch - WORKS

https://dynatrace.employment.gov.au/e/a54fd809-825f-489b-8235-93b7b086f055/api/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application in ("ESSWEB_TESTFIX") AND userType="REAL_USER" and useraction.name startswith 'Clicked PlannedJobsearchEffortFetchContent on page /TESTFIX/ESSWEB/EPS5/NTHN/GC70/Dashboard/DashboardMain'&startTimestamp=1579611600000&endTimeStamp=1579697999000&explain=false&api-token=bqx7G5oVR3uQPNXfo3ykD





Loaded PlannedJobsearchEffortFetchContent on page /TESTFIX/ESSWEB/EPS5/NTHN/GC70/Dashboard/DashboardMain



https://dynatrace.employment.gov.au/e/a54fd809-825f-489b-8235-93b7b086f055/api/config/v1/userSessionQueryLanguage/table?query=SELECT count(distinct userId) FROM usersession where useraction.application IN ("ESSWEB_DEV")



SELECT stringProperties.organisation AS Organisation, COUNT(userId) as Users, COUNT(*) as Actions FROM usersession WHERE useraction.application="EMP - ESSWeb" AND userType="REAL_USER" GROUP BY stringProperties.organisation ORDER BY COUNT(*) DESC



SELECT stringProperties.organisation AS Organisation, COUNT(userId) as Users, COUNT(*) as Actions FROM usersession WHERE useraction.application="ESSWEB_DEV" AND userType="REAL_USER" GROUP BY stringProperties.organisation ORDER BY COUNT(*) DESC