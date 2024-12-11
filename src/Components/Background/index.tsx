//@ts-ignore
import ShadertoyReact from "shadertoy-react";
//Above is like only JS, but it works with react.
//@ts-check

export function Background(inputShader: string): JSX.Element {
    return <>
        <div className="-z-1 fixed top-0 left-0 w-full h-full">
            {/* Be able to switch shaders. :3 */}
        </div>
    </>;
}