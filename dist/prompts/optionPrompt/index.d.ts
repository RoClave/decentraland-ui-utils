/// <reference types="dcl" />
/**
 * Displays a prompt window with two buttons that perform separate actions
 *
 * @param {string} title: Header on dialog
 * @param {string} instructions: Smaller print instructions
 * @param {() => void} onAccept: Function that gets executed if player clicks accept
 * @param {() => void} onReject: Function that gets executed if player clicks reject
 * @param {string} acceptLabel: String to go in the accept button
 * @param {string} rejectLabel: String to go in the reject button
 * @param {boolean} useDarkTheme: Switch to the dark theme
 *
 */
export declare class OptionPrompt extends Entity {
    title: UIText;
    text: UIText;
    buttonE: UIImage;
    buttonELabel: UIText;
    buttonEIcon: UIImage;
    buttonF: UIImage;
    buttonFLabel: UIText;
    buttonFIcon: UIImage;
    closeIcon: UIImage;
    onAccept: () => void;
    onReject: null | (() => void);
    EButtonAction: () => void | Subscription[];
    FButtonAction: () => void | Subscription[];
    UIOpenTime: number;
    canvas: UICanvas;
    background: UIImage;
    constructor(title: string, instructions: string, onAccept: () => void, onReject?: () => void, acceptLabel?: string, rejectLabel?: string, useDarkTheme?: boolean);
    /**
     * Hides the prompt from view in the screen.
     */
    close(): void;
    /**
     * Runs the onAccept function, then hides the prompt from view in the screen.
     */
    accept(): void;
    /**
     * Runs the onReject function, then hides the prompt from view in the screen.
     */
    reject(): void;
    /**
     * Hides the prompt from view in the screen.
     */
    hide(): void;
    /**
     * Makes an invisible prompt visible again.
     */
    show(): void;
}
