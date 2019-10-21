# soccergithubmichelecreanza.github.io
soccer

My first project is about to begin


pull 


soccer link file:///Users/michelecreanzaair/Desktop/code/soccergithubmichelecreanza.github.io/index.html?

API info
Filter	Type	Description / Possible values
id	Integer /[0-9]+/	The id of a resource.
matchday	Integer /[1-4]+[0-9]*/	
season	String /YYYY/	The starting year of a season e.g. 2017 or 2016
status	Enum /[A-Z]+/	The status of a match. [SCHEDULED | LIVE | IN_PLAY | PAUSED | FINISHED | POSTPONED | SUSPENDED | CANCELED]
venue	Enum /[A-Z]+/	Defines the venue (type). [HOME | AWAY]
dateFrom / dateTo	String /YYYY-MM-dd/	e.g. 2018-06-22
stage	String /[A-Z]+/	Check the season node for available stages of a particular competition/season.
plan	String /[A-Z]+/	[ TIER_ONE | TIER_TWO | TIER_THREE | TIER_FOUR ]
competitions	String /\d+,\d+/	Comma separated list of competition ids.
group	String /[A-Z]+/	Allows filtering for groupings in a competition.
limit	Integer /\d+/	Limits your result set to the given number. Defaults to 10.
standingType	String /[A-Z]+/	[ TOTAL (default) | HOME | AWAY ]
Example Requests
See todays' matches of your subscribed competitions:
https://api.football-data.org/v2/matches
Get all matches of the Champions League:
https://api.football-data.org/v2/competitions/CL/matches
See all upcoming matches for Real Madrid:
https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED
Get all matches where Gigi Buffon was in the squad:
https://api.football-data.org/v2/players/2019/matches?status=FINISHED
Check schedules for Premier League on matchday 11:
https://api.football-data.org/v2/competitions/PL/matches?matchday=11
Get the league table for HOME matches only of Belgiums Jupiler Pro League:
https://api.football-data.org/v2/competitions/BJL/standings?standingType=HOME
See best 10 scorers of Italy's top league (scorers subresource defaults to limit=10):
https://api.football-data.org/v2/competitions/SA/scorers





