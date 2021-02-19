import React from 'react';

import './MapsPage.scss';

const MapsPage = () => {
    return (
        <div className="mapsPage" >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19792.985020432952!2d39.2105613625733!3d51.675889246723514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x643282f2199b266f!2z0JLQvtGA0L7QvdC10LbRgdC60LjQuSDQs9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC90LbQtdC90LXRgNC90YvRhSDRgtC10YXQvdC-0LvQvtCz0LjQuQ!5e0!3m2!1sen!2sru!4v1613493463861!5m2!1sen!2sru"
                width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false"
                tabIndex="0" title="googleMap">
            </iframe>
        </div>
    );
};

export default MapsPage;
