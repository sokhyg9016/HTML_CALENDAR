# HTML_CALENDAR
```html``` ```css``` ```javascript``` 를 이용하여 년도와 첫달의 시작 지점을 입력으로 받아 입력받은 년도의 달력을 출력하는 
프로그램을 작성해보자.

## JavaScirpt Code

```javascript

const month_names = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const week_day = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const end_month = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

// 달력을 추가할 요소를 변수로 저장
const cal = $('#calendar');

// 사용자에게 입력을 받아 Calendar의 매개변수로 넘기고 Calendar를 호출
function CAL()
{
  ...
}

// 사용자에게 입력받은 값을 바탕으로 달력을 출력한다. 
function Calendar(year, start)
{
  ...
}
```


## preview
![alt text](https://github.com/sokhyg9016/HTML_CALENDAR/blob/master/calendar_js/dist/Preview.JPG)
