import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var Report = React.createClass({
    getReport: function () {
        var self = this;
        $.ajax({
            url: "http://localhost:8080/key/getReport"
        }).then(function (data) {
            self.setState({id: data.key});
        });
    },
    getInitialState: function () {
        return {
            id: 'haha'
        };
    },
    componentDidMount: function () {
        this.getReport();
    },
    render: function() {
        return (
            <div>
                Id is {this.state.id}
            </div>
        );
    }
});

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('main')
// );

ReactDOM.render(
    <Report/>, document.getElementById('main')
);