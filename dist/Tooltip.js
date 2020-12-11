"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tippy_js_1 = require("tippy.js");
const lexicon_1 = require("@modstrap/lexicon");
/**
 * Adaptation for Tippy.js.
 *
 * @see set
 * @see getInstance
 */
class Tooltip {
    /**
     * Setting up.
     *
     * @private
     */
    static init() {
        if (this.initiated)
            return;
        tippy_js_1.default.setDefaultProps({
            animation: 'scale',
            allowHTML: true,
            inertia: true,
            arrow: true,
            ignoreAttributes: true,
            zIndex: 99999,
            maxWidth: 300,
            theme: 'dark',
            offset: [0, 6],
            plugins: [tippy_js_1.followCursor],
        });
        this.initiated = true;
    }
    /**
     * Sets the tooltip handler to the target element.
     *
     * @param properties Properties.
     */
    static set(properties) {
        this.init();
        tippy_js_1.delegate('body', {
            ...properties,
            ...{
                onShow: this.setProperties.bind(this, properties.onShow),
                touch: (properties.trigger === 'click') ? 'hold' : true,
            }
        });
    }
    /**
     * Returns an existing instance, otherwise returns undefined.
     *
     * @param target Target item.
     */
    static getInstance(target) {
        return target._tippy;
    }
    /**
     * Sets properties for an instance.
     *
     * @param onShow
     * @param instance
     * @private
     */
    static setProperties(onShow, instance) {
        var _a, _b, _c;
        if (onShow)
            onShow(instance);
        const properties = this.getProperties(instance.reference);
        const popper = instance.popper;
        popper.classList.add('tooltip-root');
        (_a = popper.querySelector('.tippy-box')) === null || _a === void 0 ? void 0 : _a.classList.add('tooltip-box');
        (_b = popper.querySelector('.tippy-arrow')) === null || _b === void 0 ? void 0 : _b.classList.add('tooltip-arrow');
        (_c = popper.querySelector('.tippy-content')) === null || _c === void 0 ? void 0 : _c.classList.add('tooltip-content');
        if (properties.class) {
            popper.classList.add(...properties.class.split(' '));
        }
        instance.setProps(properties);
    }
    /**
     * Returns the property obtained from the target element.
     *
     * @param target Target item.
     * @private
     */
    static getProperties(target) {
        var _a, _b;
        const data = this.getData(target);
        if (data.content.startsWith('selector:')) {
            const selector = data.content.replace('selector:', '').trim();
            data.content = (_b = (_a = document.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.outerHTML) !== null && _b !== void 0 ? _b : data.content;
        }
        if (data.content.startsWith('lexicon:')) {
            const lexicon = data.content.replace('lexicon:', '').trim();
            data.content = lexicon_1.default.get(lexicon);
        }
        return data;
    }
    /**
     * Retrieves attributes prefixed with "tooltip" and converts them to properties.
     *
     * @param target Target item.
     * @private
     */
    static getData(target) {
        var _a;
        const dataset = (_a = target.dataset) !== null && _a !== void 0 ? _a : {};
        const data = {
            content: 'Content is missing!'
        };
        for (const [key, value] of Object.entries(dataset)) {
            if (!key.startsWith('tooltip'))
                continue;
            if (value === undefined)
                continue;
            const property = key.replace(/^tooltip./, (prefix) => prefix.slice(-1).toLowerCase());
            data[property] = value;
        }
        return data;
    }
}
/**
 * Reconfiguration prevention indicator.
 *
 * @private
 */
Tooltip.initiated = false;
exports.default = Tooltip;
