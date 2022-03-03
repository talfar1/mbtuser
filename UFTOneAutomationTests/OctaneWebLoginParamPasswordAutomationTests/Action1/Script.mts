﻿Browser("Login").Navigate "https://nightly-dev.almoctane.com/" @@ script infofile_;_ZIP::ssf11.xml_;_
 
 If Browser("DASHBOARD").Page("DASHBOARD").WebElement("Open widgets & templates").Exist(5) Then
Browser("DASHBOARD").Page("DASHBOARD").WebElement("Open widgets & templates").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("DASHBOARD").Page("DASHBOARD").Image("user avatar").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("DASHBOARD").Page("DASHBOARD").WebButton("Logout").Click
Reporter.ReportEvent micDone, "Logout succeful","the Octane was in login"
 End If
 If Browser("DASHBOARD").Page("Login").WebButton("Login").Exist(5) Then
Browser("DASHBOARD").Page("Login").WebEdit("WebEdit").Set Parameter("Octane_User_Name") @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("DASHBOARD").Page("Login").WebEdit("WebEdit_2").SetSecure Parameter("Octane_Password") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("DASHBOARD").Page("Login").WebButton("Login").Click
 End If
 If Browser("DASHBOARD").Page("DASHBOARD").WebElement("Open widgets & templates").Exist(5) Then
 	Reporter.ReportEvent micPass, "Login succeful","the Octane login succesful"
 	Else
 	Reporter.ReportEvent micFail, "Login fail","the Octane fail to login"
 End If
Reporter.ReportEvent micDone, "Done the tests","Done the Octane login tests"
