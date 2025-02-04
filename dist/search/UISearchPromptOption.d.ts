/// <reference types="dcl" />
/// <reference types="env" />
import { InitialUIProperties, UIBase } from './commons/UIBase';
import { SearchPromptOption } from './UISearchPrompt';
export declare class UISearchPromptOption extends UIBase<UIContainerRect> {
    private static readonly DEFAULTS;
    private readonly config;
    private readonly image;
    private readonly topRightText;
    private readonly topLeftText;
    private readonly bottomLeftText;
    private readonly bottomRightText;
    private readonly clickableContainer;
    constructor(parent: UIShape, initialProperties?: InitialProperties);
    setOption(option: SearchPromptOption, onClick?: () => void): void;
    setProperties(prop: Partial<UIContainerRect>): void;
    getProperty<K extends keyof UIContainerRect>(propName: K): UIContainerRect[K];
    /**
     * Simulate as if the user had clicked on the option, and perform the corresponding action
     */
    performClick(): void;
}
declare type InitialProperties = InitialUIProperties<UIContainerRect> & UISearchPromptOptionConfig & {
    placeholderColor?: Color4;
};
declare type UISearchPromptOptionConfig = {
    topFontSize: number;
    bottomFontSize: number;
    imageSize: number;
    topTextColor: Color4;
    bottomTextColor: Color4;
    background?: Color4;
    placeholderColor?: Color4;
};
export {};
