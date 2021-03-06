"use strict";
let mocker = requireLib("mocker");
let mocker_express = (props) =>
    ((req, res) =>
        mocker(props)
            .then((data) => res.status(props.response).send(data && data.responses))
            .catch((err) => res.status(500).send(err))
    );

module.exports = {
    get: mocker_express({
        path: "/test/{uuid}/action/{conversation_id}",
        operation: "get",
        response: 200
    })
};
