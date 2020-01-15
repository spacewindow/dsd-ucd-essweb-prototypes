// user count ESSWeb Active usersession


SELECT count(distinct userId) FROM usersession where useraction.application IN ("UCD Team")


// FUNNEL example

SELECT FUNNEL(useraction.application in ("EMP - ESSWeb") as 'Total sessions', useraction.name startswith 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/DashboardMain' as 'Dashboard Main', useraction.name STARTSWITH 'Loading of page /ESSWEB/[Contract]/[Organisation]/[Site]/Dashboard/ProviderDashboardDiaryWidget/EditCheckinRowModal' as 'Diary Widget') from usersession

// query diarycheckin

SELECT count(distinct usersession.userId), useraction.type from useraction where useraction.application in ("UCD Team") and (useraction.name startswith 'widget loaded - diarycheckinfetchcontent' OR useraction.name startswith 'click on "widget click - diarycheckinfetchcontent') GROUP BY useraction.type

