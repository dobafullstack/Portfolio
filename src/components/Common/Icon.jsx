import React from "react";

export function Icon(props) {
    let icon = null;
    const {
        facebook,
        instagram,
        education,
        history,
        programing,
        project,
        interest,
        user,
        email,
        location,
    } = props;

    switch ("true") {
        case facebook:
            icon = "fab fa-facebook-square";
            break;
        case instagram:
            icon = "fab fa-instagram-square";
            break;
        case education:
            icon = "fas fa-user-graduate";
            break;
        case history:
            icon = "fas fa-history";
            break;
        case programing:
            icon = "fas fa-laptop-code";
            break;
        case project:
            icon = "fas fa-chart-bar";
            break;
        case interest:
            icon = "fas fa-palette";
            break;
        case user:
            icon = "fas fa-user";
            break;
        case email:
            icon = "fas fa-mail-bulk";
            break;
        case location:
            icon = "fas fa-map-marker-alt";
            break;
        default:
            icon = "fab fa-facebook-square";
            break;
    }

    return <i {...props} className={`${icon} ${props.className}`}></i>;
}
