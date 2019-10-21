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
      url: "http://api.football-data.org//v2/competitions/SA/standings",

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

      const standing = $("<div id ='standing'>");
      $(".container").append(standing);

      // Competition
      const $name = $("<h1  >")
        .text("Standing: " + data.competition.name)
        .css("color", "red");

      const $currentMatchday = $("<h1  >")
        .text("currentMatchday: " + data.season.currentMatchday)
        .css("color", "pink");
      $(standing).append($name);

      $(standing).append($currentMatchday);

      // Standings Array
      for (let i = 0; i < data.standings.length; i++) {
        console.log("Standing " + i + ": " + data.standings[i].stage);
        const $stage = $("<button>")
          .text("  Total/Home/Away Standing " + data.standings[i].stage)
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

        console.log("matches " + i + ": " + data.matches[i].awayTeam.name);
        const $fucasa = $("<h2>")
          .text(data.matches[i].awayTeam.name)
          .css("color", "blue");

        $("#match").append($fucasa);

        console.log(
          "matches " + i + ": " + data.matches[i].score.fullTime.homeTeam
        );
        const $winner1 = $("<h2>")
          .text(data.matches[i].score.fullTime.homeTeam)
          .css("color", "black");

        $("#match").append($winner1);

        const $winner = $("<h2>")
          .text(data.matches[i].score.fullTime.awayTeam)
          .css("color", "blak");

        $("#match").append($winner);

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

        console.log("matches " + i + ": " + data.matches[i].awayTeam.name);
        const $away = $("<h2>")
          .text(data.matches[i].awayTeam.name)
          .css("color", "blue");

        $(SCHEDULED).append($away);

        const $homeTeam = $("<h2>")
          .text(data.matches[i].homeTeam.name)
          .css("color", "blue");

        $(SCHEDULED).append($homeTeam);

        console.log("matches " + i + ": " + data.matches[i].utcDate);
        const $utcDate = $("<h2>")
          .text("  Played " + data.matches[i].utcDate)
          .css("color", "green");

        $(SCHEDULED).append($utcDate);

        console.log(
          "matches " + i + ": " + data.matches[i].score.fullTime.awayTeam
        );
        const $awayTeam = $("<h3>")
          .text(data.matches[i].score.fullTime.awayTeam)
          .css("color", "red");

        $(SCHEDULED).append($awayTeam);

        console.log(
          "matches " + i + ": " + data.matches[i].score.fullTime.homeTeam
        );
        const $home = $("<h3>")
          .text(data.matches[i].score.fullTime.homeTeam)
          .css("color", "red");

        $(SCHEDULED).append($home);

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

      //ADD EVERY INNER DIV PLAYER TEAM  COMP
      console.log(data);

      const live = $("<div id ='live'>");
      $(".container").append(live);
      //ADD THIS IN EVERY BUTTON: MAKE INNER DIV FOR BUTTON AND APPEND TO .CONTAINER
      //APPEND EVERYTHING TO INNER DIV

      const $name = $("<h1  >")
        .text("Best Score  : " + data.competition.name)
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

        const $homeTeamt = $("<h2>")
          .text(data.matches[i].homeTeam.name)
          .css("color", "black");

        $("#giocatore").append($homeTeamt);

        const $awayTeam = $("<h2>")
          .text(data.matches[i].score.fullTime.awayTeam)
          .css("color", "green");
        $("#giocatore").append($awayTeam);

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