jQuery(function ($) {


    /**
     * Timetable shortcode
     */
    (function () {


        var $scp_timetable = $('.scp-timetable');

        $scp_timetable.each(function () {

            var $this = $(this);
            var $titles = $this.find('.title');
            var $subtitles = $this.find('.subtitle');
            var $data = $this.find('.data');


            /**
             * Titles
             */

            var titleHeight = 0;

            $titles.each(function () {

                var $this = $(this);
                var height = $this.height();

                if (height > titleHeight) {
                    titleHeight = height;
                }
            });

            $titles.each(function () {
                var $this = $(this);
                $this.height(titleHeight);
            });

            /**
             * Subtitles
             */
            var subtitleHeight = 0;

            $subtitles.each(function () {

                var $this = $(this);
                var height = $this.height();

                if (height > subtitleHeight) {
                    subtitleHeight = height;
                }
            });

            $subtitles.each(function () {
                var $this = $(this);
                $this.height(subtitleHeight);
            });


            /**
             * Data
             */
            var dataHeight = 0;

            $data.each(function () {

                var $this = $(this);
                var height = $this.height();

                if (height > dataHeight) {
                    dataHeight = height;
                }
            });

            $data.each(function () {
                var $this = $(this);
                $this.height(dataHeight);
            });


        });
    })();

});
