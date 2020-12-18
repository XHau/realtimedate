import app from 'xhau/app';
import humanTime from 'xhau/utils/humanTime';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

app.initializers.add('xhau-realtimedate', () => {
    var config = {
        thresholds: [
            { l: 's', r: 59, d: 'second' },
            { l: 'ss', r: 10, },
            { l: 'm', r: 1 },
            { l: 'mm', r: 59, d: 'minute' },
            { l: 'h', r: 1 },
            { l: 'hh', r: 23, d: 'hour' },
            { l: 'd', r: 1 },
            { l: 'dd', r: 29, d: 'day' },
            { l: 'M', r: 1 },
            { l: 'MM', r: 11, d: 'month' },
            { l: 'y' },
            { l: 'yy', d: 'year' },
        ],
        rounding: Math.round,
    };
    dayjs.extend(relativeTime, config);

    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {
        relativeTime: {
            future: 'trong %s',
            past: '%s trước',
            s: '%d giây',
            ss: 'một giây',
            m: 'một phút',
            mm: '%d phút',
            h: 'một giờ',
            hh: '%d giờ',
            d: 'một ngày',
            dd: '%d ngày',
            M: 'một tháng',
            MM: '%d tháng',
            y: 'một năm',
            yy: '%d năm'
        }
    });

    function updateHumanTimes() {
        $('[data-humantime]').each(function () {
            const $this = $(this);
            const ago = humanTime($this.attr('datetime'));

            $this.html(ago);
        });
    }

    $(document).ready(function () {
        setInterval(updateHumanTimes, 1000);
    });
});
