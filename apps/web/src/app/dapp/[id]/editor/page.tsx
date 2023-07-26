"use client"
import useDAppDetailStore from "@/store/dapp/detail";
import { Box, Button, Group, Paper } from "@mantine/core";
import { useSafeState } from "ahooks";
import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const components: ComponentItem[] = [
    { type: "button", props: { children: "Button" } },
    { type: "text", props: { children: "Text" } },
    { type: "image", props: { src: "https://example.com/image.jpg" } },
    { type: "input", props: { placeholder: "Input" } }
];

interface DraggableComponentProps {
    component: ComponentItem;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ component }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "component",
        item: { component } as DragItem,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <Box p={8} ref={drag} style={{ opacity: isDragging ? 0.5 : 1, border: "1px solid #eee" }}>
            {component.type}
        </Box>
    );
};

const RenderPanel: React.FC = () => {
    const { components, setComponents } = useDAppDetailStore();

    const [, drop] = useDrop({
        accept: "component",
        drop: (item: DragItem) => {
            setComponents([...components, item.component]);
        }
    });

    return (
        <Paper shadow="sm" miw={300} h={100} ref={drop}>
            {components.map((component, index) => {
                console.log("components: ", components);
                return (
                    <React.Fragment key={index}>
                        {component.type === "button" && <Button>{component.props.children}</Button>}
                        {component.type === "image" && <img src={component.props.src} />}
                    </React.Fragment>
                );
            })}
        </Paper>
    );
};

const DAppEditor = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Group>
                <Box>
                    {components.map((component, index) => (
                        <DraggableComponent key={index} component={component} />
                    ))}
                </Box>
                <RenderPanel />
            </Group>
        </DndProvider>
    );
};

export default DAppEditor;
