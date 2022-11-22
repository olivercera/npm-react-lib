import React from 'react';

export interface ExampleProps {
    name: string;
}

const Example = (props: ExampleProps) => {
    return (
        <div>
            <h1>Hello {props.name || 'World'}!</h1>
            <p>This is the first component from this library!</p>
        </div>
    );
};

export default Example;
