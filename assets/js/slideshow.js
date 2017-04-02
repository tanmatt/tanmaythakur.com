function initGallery(galleryType) {
    return new juicebox({
        configUrl: 'assets/config/' + galleryType +'.xml',
        containerId: 'juicebox-container',
        galleryWidth: '100%',
        galleryHeight: '100%',
        backgroundColor: '#151314',
        enableLooping: 'TRUE',
        screenMode: 'AUTO',
        enableKeyboardControls: 'TRUE',
        imageTransitionType: 'CROSS_FADE',
        imageScaleMode: 'SCALE',
        imageTransitionTime: '0.3',
        enableAutoPlay: 'TRUE',
        showAutoPlayButton: 'TRUE',
        autoPlayOnLoad: 'TRUE',
        goNextOnAutoPlay: 'TRUE',
        shareFacebook: 'TRUE',
        shareGPlus: 'TRUE',
        addSEOContent: 'TRUE',
        flickrImageSize: 'LARGE',
        flickrShowDescription:'TRUE',
        enableDirectLinks: 'TRUE',
        showSplashPage: 'NEVER',
        useThumbDots: 'TRUE',
        themeUrl : "assets/css/theme.css"
    });
};
