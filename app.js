console.log("Soccer is connected to app.js!");

$(() => {
  $("#Standings").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url:
        "http://api.football-data.org//v2/competitions/SA/standings?standingType=TOTAL",

      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      console.log(data);
      $("#match").remove();
      $("#schedule").remove();
      $("#live").remove();
      $("#giocatore").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime1").remove();
      $("#ultime2").remove();

      const standing = $("<div id ='standing'>");
      $(".container").append(standing);

      // Competition
      const $name = $("<h1  >")
        .text("Standing: " + data.competition.name)
        .css("color", "red");
      $(standing).append($name);
      const $currentMatchday = $("<h1  >")
        .text("currentMatchday: " + data.season.currentMatchday)
        .css("color", "pink");

      $(standing).append($currentMatchday);

      // Standings Array
      for (let i = 0; i < data.standings.length; i++) {
        console.log("Standing " + i + ": " + data.standings[i].stage);
        const $stage = $("<button>")
          .text(data.standings[i].stage)
          .css("color", "blue");
        $(standing).append($stage);

        const div = $("<div>");
        $(standing).append(div);
        $($stage).on("click", event => {
          div.empty();
          const stage = $(event.currentTarget);

          console.log(stage);

          // Table Array
          for (let j = 0; j < data.standings[i].table.length; j++) {
            console.log("Team: " + data.standings[i].table[j].team.name);
            const $standings = $("<h2>")
              .text("  Team: " + data.standings[i].table[j].team.name)
              .css("color", "green");
            div.append($standings);

            console.log("Team: " + data.standings[i].table[j].points);
            const $point = $("<h2>")
              .text("  Point: " + data.standings[i].table[j].points)
              .css("color", "blue");
            div.append($point);
          }
        });
        console.log("================");
      }
    });
  });
});

$(() => {
  $("#Match").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: "https://api.football-data.org/v2/competitions/CL/matches",

      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#live").remove();
      $("#giocatore").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime1").remove();
      $("#ultime2").remove();

      //ADD EVERY INNER DIV PLAYER TEAM  COMP
      console.log(data);

      const match = $("<div id ='match'>");
      $(".container").append(match);
      //ADD THIS IN EVERY BUTTON: MAKE INNER DIV FOR BUTTON AND APPEND TO .CONTAINER
      //APPEND EVERYTHING TO INNER DIV

      const $name = $("<h1  >")
        .text(data.competition.name)
        .css("color", "red");

      $("#match").append($name);

      for (let i = 0; i < data.matches.length; i++) {
        console.log("matches " + i + ": " + data.matches[i].homeTeam.name);
        const $casa = $("<h2>")
          .text(data.matches[i].homeTeam.name)
          .css("color", "blue");

        $("#match").append($casa);

        const $winner1 = $("<h2>")
          .text(data.matches[i].score.fullTime.homeTeam)
          .css("color", "black");

        $("#match").append($winner1);

        console.log("matches " + i + ": " + data.matches[i].awayTeam.name);
        const $fucasa = $("<h2>")
          .text(data.matches[i].awayTeam.name)
          .css("color", "blue");

        $("#match").append($fucasa);

        const $winner = $("<h2>")
          .text(data.matches[i].score.fullTime.awayTeam)
          .css("color", "blak");

        $("#match").append($winner);

        console.log(
          "matches " + i + ": " + data.matches[i].score.fullTime.homeTeam
        );

        console.log("matches " + i + ": " + data.matches[i].score.winner);

        console.log("matches " + i + ": " + data.matches[i].utcDate);
        const $utcDate = $("<h4>")
          .text("  Played " + data.matches[i].utcDate)
          .css("color", "green");

        $("#match").append($utcDate);

        console.log("================");
      }
    });
  });
});

$(() => {
  $("#SCHEDULED").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: "https://api.football-data.org/v2/teams/109/matches",

      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#match").remove();
      $("#live").remove();
      $("#giocatore").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime1").remove();
      $("#ultime2").remove();

      //ADD EVERY INNER DIV PLAYER TEAM  COMP
      console.log(data);

      const SCHEDULED = $("<div id ='schedule'>");
      $(".container").append(SCHEDULED);
      //ADD THIS IN EVERY BUTTON: MAKE INNER DIV FOR BUTTON AND APPEND TO .CONTAINER
      //APPEND EVERYTHING TO INNER DIV

      for (let i = 0; i < data.matches.length; i++) {
        console.log("matches " + i + ": " + data.matches[i].homeTeam.name);
        const $Competizione = $("<h1>")
          .text(data.matches[i].competition.name)
          .css("color", "red");

        $(SCHEDULED).append($Competizione);

        var utcDate = new Date().toLocaleString("en-US", {
          timeZone: "America/New_York"
        });
        utcDate = new Date(utcDate);
        utcDate = $("<h4>")
          .text("  NOW " + utcDate.toLocaleString())
          .css("color", "red");
        console.log("USA time: " + utcDate.toLocaleString());

        $(SCHEDULED).append(utcDate);

        const $utcDate = $("<h2>")
          .text("  Played " + data.matches[i].utcDate)
          .css("color", "black");

        $(SCHEDULED).append($utcDate);

        const $matchday = $("<h2>")
          .text("  matchday " + data.matches[i].matchday)
          .css("color", "red");

        $(SCHEDULED).append($matchday);

        console.log("matches " + i + ": " + data.matches[i].awayTeam.name);
        const $away = $("<h2>")
          .text(data.matches[i].awayTeam.name)
          .css("color", "blue");

        $(SCHEDULED).append($away);

        const $awayTeam = $("<h3>")
          .text(data.matches[i].score.fullTime.awayTeam)
          .css("color", "red");

        $(SCHEDULED).append($awayTeam);

        const $homeTeam = $("<h2>")
          .text(data.matches[i].homeTeam.name)
          .css("color", "blue");

        $(SCHEDULED).append($homeTeam);

        const $home = $("<h3>")
          .text(data.matches[i].score.fullTime.homeTeam)
          .css("color", "red");

        $(SCHEDULED).append($home);

        console.log(
          "matches " + i + ": " + data.matches[i].score.fullTime.awayTeam
        );

        console.log(
          "matches " + i + ": " + data.matches[i].score.fullTime.homeTeam
        );

        console.log("matches " + i + ": " + data.matches[i].matchday);
        // const $matchday = $("<h2>")
        //   .text("  matchday " + data.matches[i].matchday)
        //   .css("color", "red");

        // $(SCHEDULED).append($matchday);

        console.log("================");
        // }
      }
    });
  });
});

$(() => {
  $("#LIVE").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: "https://api.football-data.org/v2/competitions/SA/scorers",
      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#match").remove();
      $("#giocatore").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime1").remove();
      $("#ultime2").remove();

      //ADD EVERY INNER DIV PLAYER TEAM  COMP
      console.log(data);

      const live = $("<div id ='live'>");
      $(".container").append(live);
      //ADD THIS IN EVERY BUTTON: MAKE INNER DIV FOR BUTTON AND APPEND TO .CONTAINER
      //APPEND EVERYTHING TO INNER DIV

      const $name = $("<h1  >")
        .text("Best Score in   " + data.competition.name)
        .css("color", "red");

      $("#live").append($name);

      for (let i = 0; i < data.scorers.length; i++) {
        console.log("matches " + i + ": " + data.scorers[i].player.name);
        const $capocanoniere = $("<h2>")
          .text(" Player  " + data.scorers[i].player.name)
          .css("color", "blue");

        $("#live").append($capocanoniere);

        console.log("matches " + i + ": " + data.scorers[i].numberOfGoals);
        const $numberOfGoals = $("<h2>")
          .text(" Goals  " + data.scorers[i].numberOfGoals)
          .css("color", "green");

        $("#live").append($numberOfGoals);
      }
    });
  });
});

$(() => {
  $("#Player").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: " http://api.football-data.org/v2/players/44/matches",
      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#match").remove();
      $("#live").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime1").remove();
      $("#ultime").remove();
      $("#ultime2").remove();

      //ADD EVERY INNER DIV PLAYER TEAM  COMP
      console.log(data);
      const giocatore = $("<div id ='giocatore'>");
      $(".container").append(giocatore);
      //ADD THIS IN EVERY BUTTON: MAKE INNER DIV FOR BUTTON AND APPEND TO .CONTAINER
      //APPEND EVERYTHING TO INNER DIV
      const $name = $("<h1  >")
        .text("Best world player : " + data.player.firstName)
        .css("color", "red");
      $("#giocatore").append($name);

      for (let i = 0; i < data.matches.length; i++) {
        console.log("matches " + i + ": " + data.matches[i].score.winner);

        const $status = $("<h2>")
          .text(data.matches[i].competition.name)
          .css("color", "red");

        $("#giocatore").append($status);

        const $awayTeamt = $("<h2>")
          .text(data.matches[i].awayTeam.name)
          .css("color", "black");

        $("#giocatore").append($awayTeamt);

        const $awayTeam = $("<h2>")
          .text(data.matches[i].score.fullTime.awayTeam)
          .css("color", "green");
        $("#giocatore").append($awayTeam);

        const $homeTeamt = $("<h2>")
          .text(data.matches[i].homeTeam.name)
          .css("color", "black");

        $("#giocatore").append($homeTeamt);

        const $homeTeam = $("<h2>")
          .text(data.matches[i].score.fullTime.homeTeam)
          .css("color", "green");
        $("#giocatore").append($homeTeam);

        const $utcDate = $("<h2>")
          .text("  Played  " + data.matches[i].utcDate)
          .css("color", "blue");

        $("#giocatore").append($utcDate);
      }
    });
  });
});

$(() => {
  $("#search").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: " https://api.football-data.org/v2/competitions/SA/matches",
      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#match").remove();
      $("#live").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime1").remove();
      $("#ultime2").remove();

      console.log(data);

      const ultime = $("<div id ='ultime'>");
      $(".container").append(ultime);

      const $name = $("<h1  >")
        .text(data.competition.name)
        .css("color", "pink");

      $("#ultime").append($name);

      for (let i = 0; i < data.matches.length; i++) {
        console.log("matches " + i + ": " + data.matches[i].homeTeam.name);
        const $casa = $("<h2>")
          .text(
            data.matches[i].score.fullTime.homeTeam +
              "                       " +
              data.matches[i].homeTeam.name
          )

          .css("color", "black");

        $("#ultime").append($casa);

        console.log("matches " + i + ": " + data.matches[i].awayTeam.name);
        const $fucasa = $("<h2>")
          .text(
            data.matches[i].score.fullTime.awayTeam +
              "                       " +
              data.matches[i].awayTeam.name
          )
          .css("color", "black");

        $("#ultime").append($fucasa);

        console.log(
          "ultime " + i + ": " + data.matches[i].score.fullTime.homeTeam
        );
        // const $winner1 = $("<h2>")
        //   .text(data.matches[i].score.fullTime.homeTeam)
        //   .css("color", "black");

        // $("#ultime").append($winner1);

        // const $winner = $("<h2>")
        //   .text(data.matches[i].score.fullTime.awayTeam)
        //   .css("color", "blak");

        // $("#ultime").append($winner);

        // console.log("matches " + i + ": " + data.matches[i].score.winner);

        console.log("matches " + i + ": " + data.matches[i].utcDate);
        const $utcDate = $("<h4>")
          .text("  Played " + data.matches[i].utcDate)
          .css("color", "green");

        $("#ultime").append($utcDate);

        console.log("matches " + i + ": " + data.matches[i].matchday);
        const $matchday = $("<h2>")
          .text("  matchday " + data.matches[i].matchday)
          .css("color", "red");

        $("#ultime").append($matchday);

        console.log("================");
      }
    });
  });
});

$(() => {
  $("#search1").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: "https://api.football-data.org/v2/matches",
      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#match").remove();
      $("#live").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime2").remove();

      console.log(data);

      const ultime1 = $("<div id ='ultime1'>");
      $(".container").append(ultime1);

      for (let i = 0; i < data.matches.length; i++) {
        console.log("matches " + i + ": " + data.matches[i].homeTeam.name);
        const $casa = $("<h2>")
          .text(
            data.matches[i].score.fullTime.homeTeam +
              "                       " +
              data.matches[i].homeTeam.name
          )

          .css("color", "black");

        $("#ultime1").append($casa);

        console.log("matches " + i + ": " + data.matches[i].awayTeam.name);
        const $fucasa = $("<h2>")
          .text(
            data.matches[i].score.fullTime.awayTeam +
              "                       " +
              data.matches[i].awayTeam.name
          )
          .css("color", "black");

        $("#ultime1").append($fucasa);

        console.log(
          "ultime1 " + i + ": " + data.matches[i].score.fullTime.homeTeam
        );
        const $winner1 = $("<h2>")
          .text(data.matches[i].score.fullTime.homeTeam)
          .css("color", "red");

        $("#ultime1").append($winner1);

        const $winner = $("<h2>")
          .text(data.matches[i].score.fullTime.awayTeam)
          .css("color", "red");

        $("#ultime1").append($winner);

        console.log("matches " + i + ": " + data.matches[i].score.winner);

        console.log("matches " + i + ": " + data.matches[i].utcDate);
        const $utcDate = $("<h4>")
          .text("  Playing " + data.matches[i].utcDate)
          .css("color", "green");
        var utcDate = new Date().toLocaleString("en-US", {
          timeZone: "America/New_York"
        });
        utcDate = new Date(utcDate);
        utcDate = $("<h4>")
          .text("  NOW " + utcDate.toLocaleString())
          .css("color", "red");
        console.log("USA time: " + utcDate.toLocaleString());

        $("#ultime1").append(utcDate);

        $("#ultime1").append($utcDate);

        console.log("matches " + i + ": " + data.matches[i].matchday);
        const $matchday = $("<h2>")
          .text("  matchday " + data.matches[i].matchday)
          .css("color", "red");

        $("#ultime1").append($matchday);

        console.log("================");
      }
    });
  });
});

$(() => {
  $("#searchButton").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: " https://api.football-data.org/v2/competitions",
      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#match").remove();
      $("#live").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime1").remove();

      console.log(data);

      const ultime1 = $("<div id ='ultime2'>");
      $(".container").append(ultime1);

      for (let i = 0; i < data.competitions.length; i++) {
        console.log("matches " + i + ": " + data.competitions[i].name);

        const inputSearch = $("#search2")
          .val()
          .toUpperCase();

        if (data.competitions[i].name.toUpperCase().includes(inputSearch)) {
          const $Competizione = $("<h1>")
            .text(data.competitions[i].name)
            .css("color", "red");

          $("#ultime2").append($Competizione);
        }
      }
    });
  });
});

$(() => {
  $("#searchButton").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: " https://api.football-data.org/v2/teams",
      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#match").remove();
      $("#live").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime1").remove();

      console.log(data);

      const ultime1 = $("<div id ='ultime2'>");
      $(".container").append(ultime1);

      for (let i = 0; i < data.teams.length; i++) {
        console.log("matches " + i + ": " + data.teams[i].name);

        const inputSearch = $("#search2")
          .val()
          .toUpperCase();

        if (data.teams[i].name.toUpperCase().includes(inputSearch)) {
          const $Competizione = $("<h1>")
            .text(data.teams[i].name)
            .css("color", "red");

          $("#ultime2").append($Competizione);

          const $clubColors = $("<h1  >")
            .text("Shirt   " + data.teams[i].clubColors)
            .css("color", "red");

          $("#ultime2").append($clubColors);

          const $venue = $("<h1  >")
            .text("Stadio   " + data.teams[i].venue)
            .css("color", "red");

          $("#ultime2").append($venue);
          const $website = $("<h1  >")
            .text("website   " + data.teams[i].website)
            .css("color", "red");

          $("#ultime2").append($website);

          const $founded = $("<h1  >")
            .text("founded   " + data.teams[i].founded)
            .css("color", "red");

          $("#ultime2").append($founded);

          const $phone = $("<h1  >")
            .text("phone   " + data.teams[i].phone)
            .css("color", "red");

          $("#ultime2").append($phone);
        }
      }
    });
  });
});

$(() => {
  $("#searchButton").on("click", event => {
    const endpoint = $(event.currentTarget)
      .attr("id")
      .toUpperCase();
    const num = $("#sub").val();
    event.preventDefault();
    $.ajax({
      headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
      url: " https://api.football-data.org/v2/competitions/SA/teams",
      type: "GET",
      data: {
        endpoint,

        $limit: num
      }
    }).done(function(data) {
      $("#standing").remove();
      $("#schedule").remove();
      $("#match").remove();
      $("#live").remove();
      $("iframe").remove();
      $("#tradingview_cc105").remove();
      $("#ultime").remove();
      $("#ultime1").remove();

      console.log(data);

      const ultime1 = $("<div id ='ultime2'>");
      $(".container").append(ultime1);

      for (let i = 0; i < data.teams.length; i++) {
        console.log("matches " + i + ": " + data.teams[i].name);

        const inputSearch = $("#search2")
          .val()
          .toUpperCase();

        if (data.teams[i].name.toUpperCase().includes(inputSearch)) {
          const $Competizione = $("<h1>")
            .text(data.teams[i].name)
            .css("color", "red");

          $("#ultime2").append($Competizione);

          const $clubColors = $("<h1  >")
            .text("Shirt   " + data.teams[i].clubColors)
            .css("color", "red");

          $("#ultime2").append($clubColors);

          const $venue = $("<h1  >")
            .text("Stadio   " + data.teams[i].venue)
            .css("color", "red");

          $("#ultime2").append($venue);

          const $website = $("<h1  >")
            .text("website   " + data.teams[i].website)
            .css("color", "red");

          $("#ultime2").append($website);

          const $founded = $("<h1  >")
            .text("founded   " + data.teams[i].founded)
            .css("color", "red");

          $("#ultime2").append($founded);

          const $phone = $("<h1  >")
            .text("phone   " + data.teams[i].phone)
            .css("color", "red");

          $("#ultime2").append($phone);
        }
      }
    });
  });
});

// $(() => {
//   $("#search2").on("click", event => {
//     const endpoint = $(event.currentTarget)
//       .attr("id")
//       .toUpperCase();
//     const num = $("#sub").val();
//     event.preventDefault();
//     $.ajax({
//       headers: { "X-Auth-Token": "1c36c8c4dff84075bd98f7e59bfeae6d" },
//       url: " https://api.football-data.org/v2/areas",
//       type: "GET",
//       data: {
//         endpoint,

//         $limit: num
//       }
//     }).done(function(data) {
//       $("#standing").remove();
//       $("#schedule").remove();
//       $("#match").remove();
//       $("#live").remove();
//       $("iframe").remove();
//       $("#tradingview_cc105").remove();
//       $("#ultime").remove();
//       $("#ultime1").remove();

//       console.log(data);

//       const ultime1 = $("<div id ='ultime2'>");
//       $(".container").append(ultime1);

//       for (let i = 0; i < data.areas.length; i++) {
//         console.log("matches " + i + ": " + data.areas[i].name);
//         const $Competizione = $("<h1>")
//           .text(data.areas[i].name)
//           .css("color", "red");

//         $("#ultime2").append($Competizione);
//       }
//     });
//   });
// });
