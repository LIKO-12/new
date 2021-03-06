import MarkdownIt from 'markdown-it';
import * as D from '../../lib/liko-api';

import Code from './code';
import Notes from './notes';
import Arguments from './arguments';

const md = new MarkdownIt();

interface MethodProps {
    /**
     * The name of the method's container to prefix it's name with it (for example 'GPU').
     * The method is not prefixed with anything if it's undefined.
     */
    parent?: string,

    /**
     * The name of the method to display.
     */
    name: string,

    /**
     * The method to display.
     */
    method: D.LuaMethod
};
export default function Method({ parent, name, method }: MethodProps) {
    return (<>
        <h3>{parent !== undefined ? parent + '.' : null}{name}</h3>
        <p>{method.shortDescription}</p>

        {method.longDescription ? <p dangerouslySetInnerHTML={{__html: md.render(method.longDescription)}}/> : null}

        {method.notes ? <Notes notes={method.notes} /> : null}

        {
            D.isSingleUsageMethod(method) && method.arguments ? (<>
                <Code parent={parent} name={name} args={method.arguments} returns={method.returns} />
                <h4>Arguments:</h4>
                <Arguments args={method.arguments}/>
            </>) : null
        }

    </>);
};