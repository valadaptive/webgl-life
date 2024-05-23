import {h, type FunctionComponent} from 'preact';
import {useSignal, useComputed} from '@preact/signals';
import Grid from './grid-component';
import {useCallback} from 'preact/hooks';

const App: FunctionComponent = () => {
    const paused = useSignal(false);
    const togglePaused = useCallback(() => {
        paused.value = !paused.value;
    }, [paused]);

    const radius = useSignal(7);
    const setRadius = useCallback((event: InputEvent) => {
        radius.value = Number((event.target as HTMLInputElement).value);
    }, [radius]);


    const speed = useSignal(1);
    const setSpeed = useCallback((event: InputEvent) => {
        speed.value = Number((event.target as HTMLInputElement).value);
    }, [speed]);

    const generation = useSignal(0);
    const setGeneration = useCallback(() => {
        generation.value++;
    }, [generation]);

    return (
        <div className="app">
            <Grid
                width={1920}
                height={1080}
                paused={paused.value}
                radius={radius.value}
                speed={speed.value}
                generation={generation.value}
            />
            <div className="controls">
                <span className="control"><button onClick={togglePaused}>{paused.value ? '▶️' : '⏸️'}</button></span>
                <label className="control">Radius: <input type="range" min="1" max="15" value={radius.value} onInput={setRadius} /></label>
                <label className="control">Speed: <input type="range" min="1" max="100" value={speed.value} onInput={setSpeed} /> {speed.value}</label>
                <span className="control"><button onClick={setGeneration}>Reset</button></span>
            </div>
        </div>
    );
};

export default App;
