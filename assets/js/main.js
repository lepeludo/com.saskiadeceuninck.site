/**
 * Created by bramdeveirman on 16/06/15.
 */
//
var myApp = angular.module('saskia', []);

var player;

myApp.controller('IndexController', ['$scope', function ($scope) {
    $scope.fresh = true;
    $scope.showIndex = true;
    $scope.showOver = false;
    $scope.showContact = false;
    $scope.showFotos = false;
    $scope.amorImages = ['IMG_9968.jpg', 'IMG_9969.jpg', 'IMG_9970.jpg', 'IMG_9972.jpg', 'IMG_9974.jpg', 'IMG_9975.jpg', 'IMG_9977.jpg',
        'IMG_9978.jpg', 'IMG_9980.jpg', 'IMG_9984.jpg', 'IMG_9986.jpg', 'IMG_9987.jpg', 'IMG_9989.jpg',
        'IMG_9991.jpg', 'IMG_9993.jpg', 'IMG_9994.jpg', 'IMG_9995.jpg', 'IMG_9996.jpg', 'IMG_9998.jpg', 'IMG_9999.jpg', 'IMG_0004.jpg', 'IMG_0003.jpg', 'IMG_0002.jpg'];
    $scope.bissImages = ['IMG_1004.jpg',
        'IMG_1005.jpg', 'IMG_1008.jpg', 'IMG_1009.jpg', 'IMG_1010.jpg', 'IMG_1011.jpg', 'IMG_1012.jpg', 'IMG_1015.jpg']
    $scope.ohneImages = ['1vedett.jpg', '2Feet.jpg', '3wendyenkunstenaar2.jpg','4Wendyenkunstenaar.jpg','5expressief.jpg'
    ,'6wendyshapjes.jpg','7ijslandsekunst.jpg','8lieve.jpg','9wazig.jpg','10flouartistique.jpg','web1.jpg','web2.jpg','web3.jpg','web4.jpg','web5.jpg','web6.jpg']


    var init = function () {
        $scope.showIndex = false;
        $scope.showOver = false;
        $scope.showContact = false;
        $scope.showFotos = false;
        $scope.showOhneTitel = false;
        $scope.showFriends = false;
        $scope.showAgenda = false;
    }


// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
// Inject YouTube API script
    var tag = document.createElement('script');
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// this function gets called when API is ready to use
    window.onYouTubePlayerAPIReady = function () {
        player = new YT.Player('video', {
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'rel' : 0,
                'fs' : 0
            },
            events: {
                // call this function when player is ready to use
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady(event) {

        // bind events
        var playButton = document.getElementById("play-button");
        playButton.addEventListener("click", function() {
            player.playVideo();
        });

        var pauseButton = document.getElementById("pause-button");
        pauseButton.addEventListener("click", function() {
            player.pauseVideo();
        });

    }




    $scope.doShowAgenda = function () {
        init();
        $scope.showAgenda = true;
    }

    $scope.doShowFriends = function () {
        init();
        $scope.showFriends = true;
    }

    $scope.doShowOhneTitel = function () {
        init();
        $scope.showOhneTitel = true;
    }

    $scope.doShowOver = function () {
        init();
        $scope.showfotos = $scope.showOver = true;
        ;

    }
    $scope.doShowContact = function () {
        init();
        $scope.showContact = true;
    }

    $scope.doShowFotos = function () {
        init();
        $scope.showFotos = true;
    }


    $scope.allowAmor = function () {
        $scope.ohnetitelEnabled = false;
        $scope.amorEnabled = true;
        $scope.bissEnabled = false;
        $scope.allowBoutEnabled = false;
        $scope.fresh = false;
        player.pauseVideo();
    }

    $scope.allowBiss = function () {
        $scope.ohnetitelEnabled = false;
        $scope.bissEnabled = true;
        $scope.fresh = false;
        $scope.allowBoutEnabled = false;
        $scope.amorEnabled = false;
        player.pauseVideo();
    }

    $scope.allowOhne = function(){
        $scope.bissEnabled = false;
        $scope.fresh = false;
        $scope.amorEnabled = false;
        $scope.allowBoutEnabled = false;
        $scope.ohnetitelEnabled = true;
        player.pauseVideo();
    }
    $scope.allowBout = function(){
        player.playVideo();
        $scope.bissEnabled = false;
        $scope.fresh = false;
        $scope.amorEnabled = false;
        $scope.ohnetitelEnabled = false;
        $scope.allowBoutEnabled = true;

    }
}])
;
