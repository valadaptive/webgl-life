import {h, type FunctionComponent} from 'preact';
import {useEffect, useRef} from 'preact/hooks';
import Grid from './grid';

const GridComponent: FunctionComponent<{
    width: number;
    height: number;
    paused: boolean;
    radius: number;
    speed: number;
    generation: number;
}> = ({width, height, paused, radius, speed, generation}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<Grid>();
    if (!gridRef.current) {
        gridRef.current = new Grid(width, height);
        gridRef.current.radius = radius;
    }
    const grid = gridRef.current;

    const animationFrameRef = useRef<number | null>(null);
    const animationRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        if (!gridRef.current) return;
        gridRef.current.radius = radius;
        gridRef?.current?.draw();
    }, [radius]);

    const speedRef = useRef(speed);
    useEffect(() => {
        speedRef.current = speed;
    }, [speed]);

    useEffect(() => {
        gridRef.current?.randomize();
    }, [generation]);

    useEffect(() => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }

        animationRef.current = (): void => {
            if (!gridRef.current) return;

            for (let i = 0; i < speedRef.current; i++) {
                gridRef.current.update();
            }
            gridRef.current.draw();

            if (!paused) {
                animationFrameRef.current = requestAnimationFrame(animationRef.current!);
            }
        };
    }, []);

    useEffect(() => {
        if (containerRef.current !== null) {
            containerRef.current.append(grid.canvas);
        }
    }, [containerRef.current]);

    useEffect(() => {
        if (paused && animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        } else if (!paused && !animationFrameRef.current) {
            animationFrameRef.current = requestAnimationFrame(animationRef.current!);
        }
    }, [paused]);

    return (
        <div className="grid-container" ref={containerRef} />
    );
};

export default GridComponent;
