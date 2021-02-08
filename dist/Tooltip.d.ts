import { Instance as TippyInstance, ReferenceElement } from "tippy.js";
export interface TooltipProperties {
    content: string;
    class: string;
    theme: TooltipTheme;
    placement: TooltipPlacement;
    animation: TooltipAnimation;
    interactive: boolean;
    followCursor: boolean;
}
export interface TooltipCallbacks {
    /**
     * Lifecycle hook invoked after the tooltip properties have been updated.
     *
     * @param instance
     * @param properties
     */
    onAfterUpdate?(instance: TooltipInstance, properties: Partial<TooltipCallbacks>): void;
    /**
     * Lifecycle hook invoked before the tooltip properties have been updated.
     *
     * @param instance
     * @param properties
     */
    onBeforeUpdate?(instance: TooltipInstance, properties: Partial<TooltipCallbacks>): void;
    /**
     * Lifecycle hook invoked when the tooltip has been created.
     *
     * @param instance
     */
    onCreate?(instance: TooltipInstance): void;
    /**
     * Lifecycle hook invoked when the tooltip has been destroyed.
     *
     * @param instance
     */
    onDestroy?(instance: TooltipInstance): void;
    /**
     * Lifecycle hook invoked when the tooltip has fully transitioned out and is unmounted from the DOM.
     *
     * @param instance
     */
    onHidden?(instance: TooltipInstance): void;
    /**
     * Lifecycle hook invoked when the tooltip begins to transition out.
     *
     * @param instance
     */
    onHide?(instance: TooltipInstance): void;
    /**
     * Lifecycle hook invoked when the tooltip has been mounted to the DOM.
     *
     * @param instance
     */
    onMount?(instance: TooltipInstance): void;
    /**
     * Lifecycle hook invoked when the tooltip begins to transition in.
     *
     * @param instance
     */
    onShow?(instance: TooltipInstance): void;
    /**
     * Lifecycle hook invoked when the tooltip has fully transitioned in.
     *
     * @param instance
     */
    onShown?(instance: TooltipInstance): void;
    /**
     * Lifecycle hook invoked when the tooltip was triggered by a real DOM event (called before onShow) to show the tooltip.
     *
     * @param instance
     * @param event
     */
    onTrigger?(instance: TooltipInstance, event: Event): void;
    /**
     * Lifecycle hook invoked when the tooltip was triggered by a real DOM event (called before onHide) to hide the tooltip.
     *
     * @param instance
     * @param event
     */
    onUntrigger?(instance: TooltipInstance, event: Event): void;
}
export interface TooltipSetProperties extends TooltipCallbacks {
    trigger: TooltipTrigger;
    target: string;
}
export interface TooltipTarget extends ReferenceElement {
    dataset?: DOMStringMap;
}
export interface TooltipInstance extends TippyInstance {
    reference: TooltipTarget;
}
export declare type TooltipSelector = HTMLElement | string;
export declare type TooltipTheme = "dark" | "light";
export declare type TooltipPlacement = "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "auto" | "auto-start" | "auto-end";
export declare type TooltipAnimation = "scale" | "shift-away" | "shift-toward" | "perspective";
export declare type TooltipTrigger = "mouseenter" | "focus" | "mouseenter focus" | "focusin" | "click" | "manual";
export declare type TooltipOnShow = ((instance: TooltipInstance) => void) | undefined;
/**
 * Adaptation for Tippy.js.
 *
 * @see set
 * @see getInstance
 * @see destroy
 * @see disable
 * @see enable
 * @see setContent
 * @see hide
 * @see show
 * @see unmount
 *
 * Tooltip:
 * [Github]{@link https://github.com/callisto2410/modstrap-tooltip}
 *
 * Tippy.js:
 * [Github]{@link https://github.com/atomiks/tippyjs}
 * [Homepage]{@link https://atomiks.github.io/tippyjs/}
 */
export declare class Tooltip {
    /**
     * Sets the tooltip handler to the target element.
     *
     * @param properties Properties.
     */
    static set(properties: TooltipSetProperties): void;
    /**
     * Returns an existing instance, otherwise returns undefined.
     *
     * @param target Target item.
     */
    static getInstance(target: TooltipSelector): TooltipInstance | undefined;
    /**
     * Destroy the tooltip.
     *
     * @param target
     */
    static destroy(target: TooltipSelector): void;
    /**
     * Disable the tooltip.
     *
     * @param target
     */
    static disable(target: TooltipSelector): void;
    /**
     * Enable the tooltip.
     *
     * @param target
     */
    static enable(target: TooltipSelector): void;
    /**
     * Set the content for the tooltip.
     *
     * @param target
     * @param content
     */
    static setContent(target: TooltipSelector, content: string): void;
    /**
     * Hide the tooltip.
     *
     * @param target
     */
    static hide(target: TooltipSelector): void;
    /**
     * Show the tooltip.
     *
     * @param target
     */
    static show(target: TooltipSelector): void;
    /**
     * Unmount the tooltip from the DOM.
     *
     * @param target
     */
    static unmount(target: TooltipSelector): void;
    /**
     * Sets properties for an instance.
     *
     * @param onShow
     * @param instance
     * @private
     */
    private static setProperties;
    /**
     * Returns the property obtained from the target element.
     *
     * @param target Target item.
     * @private
     */
    private static getProperties;
    /**
     * Returns the properties derived from the attributes.
     *
     * @param target Target item.
     * @private
     */
    private static getData;
}
export default Tooltip;
