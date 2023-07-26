// 定义我们的组件类型
type ComponentType = "button" | "text" | "image" | "input";

// 定义每个组件的属性
type ComponentProps = {
    children?: string;
    src?: string;
    placeholder?: string;
};

// 定义组件对象
interface ComponentItem {
    type: ComponentType;
    props: ComponentProps;
}

// 定义拖拽项
interface DragItem {
    type: string;
    component: ComponentItem;
}
