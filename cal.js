const month_names = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const week_day = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const end_month = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
const cal = $('#calendar');

function CAL()
{
    var year = $('#year').val();
    var start = $('#start').val();
    cal.html('');

    if(year != '' && start != '')
        Calendar(year, start);
}

function Calendar(year, start)
{
    let str = ""
    let is_leap = false;

    //Check the leap
    if((year % 4 === 0)&&(year % 100 != 0) || (year % 400) == 0)
    {
        end_month[1] = 29;
        is_leap = true;
    }

    for(let i = 0; i < 12; i++)
    {
        str += "<table id = 'month_cal_card'>";
        str += "<tr><th colspan = 7 style = 'padding: 10px 20px;'>" + month_names[i] + "  " +  year + "</th></tr>";
        
        str += "<tr>";
        for(let j = 0; j < week_day.length; j++)
        {
            str += "<td><b>" + week_day[j] + "</b></td>";
        }
        str += "</tr>"

        str += "<tr>";
        for(let j = 0; j < start; j++)
        {
            str += "<td id = 'days_start'>" + " " + "</td>";
        }

        for(let j = 0; j < end_month[i]; j++)
        {
            if(i == 1 && j === end_month[i] - 1 && is_leap)
            {
                str += "<td id = 'days_leap'>" + (j+1) + "</td>";
                start++;
                break;   
            }

            str += "<td id = 'days'>" + (j+1) + "</td>";
            start++;

            if(start === 7)
            {
                start = 0;
                str += "</tr>";
                str += "<tr>";
            }
        }

        if(start > 0)
        {
            for(let j = 0; j < 7 - start; j++)
            {
                str += "<td id = 'days_left'>" + "&nbsp;" + "</td>";
            }
        }
        str += "</tr>";  
        str += "</table>";
    }
    cal.append(str);
}

$(document).ready(()=>
{
    $('#print').click(()=>
    {
        CAL();
    });

    $('#source').click(()=>
    {
        $('.code-wrapper').show();
    });

    $('#close_btn').click(()=>
    {
        $('.code-wrapper').hide();
    });
});