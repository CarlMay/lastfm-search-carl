import React from 'react';

const ShortList = ({shortlist}) => {

    const listStyle = {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: 'solid 1px #ccc',
        boxSizing: 'content-box',
        marginTop: 0,
        marginBottom: 0,
    };

    return (
        <div className="ui container two column grid vertically divided left aligned" style={listStyle}>
            {
                shortlist.map(({id, name}) => {

                    const rowStyle = {
                        marginBottom: 0,
                        marginTop: 0,
                    };

                    return (
                        <div className="row" key={id}>
                            <div className="one wide column" style={rowStyle}>
                                <i aria-hidden="true" className="star outline large icon middle aligned"></i>
                            </div>
                            <div className="fourteen wide column left aligned" style={rowStyle}>{name}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ShortList;