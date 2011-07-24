// PLUGIN: Footnote

(function (Popcorn) {

  /**
   * Styler popcorn plug-in 
   * Changes the look of a footnote element on the page.
   * Options parameter will need size, color [].
   * Start is the time that you want this plug-in to execute
   * End is the time that you want this plug-in to stop executing 
   * Size is the size that you would like the text to appear in the target
   * Target is the id of the document element that the text needs to be 
   * attached to, this target element must exist on the DOM
   * 
   * @param {Object} options
   * 
   * Example:
     var p = Popcorn('#video')
      .styler({
        start: 5, // seconds
        end: 15, // seconds
        color: 'Black',
        target: 'footnotediv'
      } )
   *
   */
  Popcorn.plugin( "styler" , {
    manifest: {
      about:{
        name: "Popcorn Styler Plugin",
        version: "0.1",
        author: "@johntynan",
        website: "opensourcebroadcasting.blogspot.com"
      },
      options:{
        start             : {elem:'input', type:'text', label:'In'},
        end               : {elem:'input', type:'text', label:'Out'},
        target            : 'footnote-container',
        color             : {elem:'input', type:'text', label:'Color'}
      }
    },
    _setup: function(options) {
      // options._container = document.createElement( 'div' );
      options._container = document.getElementById( options.target )
      // options._container.style.display = "none";
      // options._container.innerHTML  = options.text;
      // document.getElementById( options.target ) && document.getElementById( options.target ).appendChild( options._container );
    },
    /**
     * @member styler 
     * The start function will be executed when the currentTime 
     * of the video  reaches the start time provided by the 
     * options variable
     */
    start: function(event, options){
      options._container.style.color = options.color;
    },
    /**
     * @member styler
     * The end function will be executed when the currentTime 
     * of the video  reaches the end time provided by the 
     * options variable
     */
    end: function(event, options){
      // options._container.style.display = "none";
    },
    _teardown: function( options ) {
      document.getElementById( options.target ) && document.getElementById( options.target ).removeChild( options._container );
    }

});
})( Popcorn );
