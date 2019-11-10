import moment from 'moment';

// Friday November 14 2014  8:43 AM
const momentFormat = 'dddd MMMM DD YYYY h:mm A';

//export const command = "date '+%A %B %d %Y %l:%M %p'";
export const command = (dispatch) => {
    dispatch({
        type: 'SUCCEDED',
        data: moment().format(momentFormat)
    });
}

export const init = (dispatch) => {
    dispatch({
        type: 'SUCCEDED',
        data: moment().format(momentFormat)
    });
}

export const initialState = {
    date: {
        dayOfWeek: 'TUESDAY',
        month: 'JANUARY',
        dayOfMonth: '11',
        year: '1983',
        time: '12:00',
        amPm: 'AM'
    }
};

export const updateState = (event, previousState) => {
    switch(event.type) {
        case 'SUCCEDED':
            const parts = moment().format(momentFormat).split(/\s+/);
            const date = {
                dayOfWeek: parts[0].toUpperCase(),
                month: parts[1].toUpperCase(),
                dayOfMonth: parts[2],
                year: parts[3],
                time: parts[4],
                amPm: parts[5].toUpperCase()
            }
            return {
                date: date
            };
        default: {
            return previousState;
        }
    }
};

export const refreshFrequency = 1000;

export const render = ({ date }) => {
    return (
        <div>
            <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css' />
            <div className="left">
                { date.dayOfWeek }<br />
                { date.month }<br />
                <span>{ date.time }</span>
            </div>
            <div className="right">
            <span>{ date.dayOfMonth }</span><br />
            { date.year }<br />
            { date.amPm }
            </div>
        </div>
    );
};

export const className = {
    top: '10px',
    left: '10px',
    lineHeight: '.85em',
    fontSize: '4em',
    fontFamily: '\'Open sans\', sans-serif',
    textShadow: '2px 2px 5px #000',
    color: '#fff',
    '.left': {
        textAlign: 'right',
        float: 'left'
    },
    '.right': {
        paddingLeft: '.2em',
        float: 'left'
    },
    div: {
        fontWeight: 300
    },
    span: {
        color: '#a9a9a9',
        fontWeight: 600
    }
};
