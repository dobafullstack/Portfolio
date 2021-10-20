import React from 'react';

export function Icon(props) {
    let icon = null;
    console.log(props);

    switch (true) {
        case props.facebook:
            icon = 'fab fa-facebook-square';
            break;
        case props.instagram:
            icon = 'fab fa-instagram-square';
            break;
        case props.education:
            icon = 'fas fa-user-graduate';
            break;
        case props.history:
            icon = 'fas fa-history';
            break;
        case props.programing:
            icon = 'fas fa-laptop-code';
            break;
        case props.project:
            icon = 'fas fa-chart-bar';
            break;
        case props.interest:
            icon = "fas fa-palette";
            break;
        case props.user:
            icon = 'fas fa-user';
            break;
        case props.email:
            icon = 'fas fa-mail-bulk';
            break;
        case props.location:
            icon = 'fas fa-map-marker-alt';
            break;
        default:
            icon = 'fab fa-facebook-square';
            break;
    }

    return <i {...props} className={`${icon} ${props.className}`}></i>;
}
