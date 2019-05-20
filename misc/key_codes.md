# Key Codes

Use `pressKeys` (or PressKeys in C#) to send keystrokes and keystroke combinations to the active application.

Each key is represented by one or more characters. To specify a single keyboard character, use the character itself. For example, to represent the letter A, pass in the string "A" to the method. To represent more than one character, append each additional character to the one preceding it. To represent the letters A, B, and C, specify the parameter as "ABC".

The plus sign (+), caret (^), percent sign (%), tilde (~), and parentheses () have special meanings. To specify one of these characters, enclose it within braces ({}). For example, to specify the plus sign, use "{+}". To specify brace characters, use "{\{}" and "{\}}". Brackets ([ ]) have no special meaning, but you must enclose them in braces. In other applications, brackets do have a special meaning that might be significant when dynamic data exchange (DDE) occurs.

To specify characters that aren't displayed when you press a key, such as ENTER or TAB, and keys that represent actions rather than characters, use the codes in the following table.

Key | Code
---|---
BACKSPACE | {BACKSPACE}, {BS}, or {BKSP}
BREAK | {BREAK}
CAPS LOCK | {CAPSLOCK}
DEL or DELETE  |  {DELETE} or {DEL}
DOWN ARROW | {DOWN}
END | {END}
ENTER | {ENTER}or ~
ESC | {ESC}
HELP | {HELP}
HOME | {HOME}
INS or INSERT | {INSERT} or {INS}
LEFT ARROW | {LEFT}
NUM LOCK | {NUMLOCK}
PAGE DOWN | {PGDN}
PAGE UP | {PGUP}
PRINT SCREEN | {PRTSC} (reserved for future use)
RIGHT ARROW | {RIGHT}
SCROLL LOCK | {SCROLLLOCK}
TAB | {TAB}
UP ARROW | {UP}
F1 | {F1}
F2 | {F2}
F3 | {F3}
F4 | {F4}
F5 | {F5}
F6 | {F6}
F7 | {F7}
F8 | {F8}
F9 | {F9}
F10 | {F10}
F11 | {F11}
F12 | {F12}
F13 | {F13}
F14 | {F14}
F15 | {F15}
F16 | {F16}
Keypad add | {ADD}
Keypad subtract | {SUBTRACT}
Keypad multiply | {MULTIPLY}
Keypad divide | {DIVIDE}


To specify keys combined with any combination of the SHIFT, CTRL, and ALT keys, precede the key code with one or more of the following codes.

Key | Code
---|---
SHIFT | +
CTRL | ^
ALT | %

To specify that any combination of SHIFT, CTRL, and ALT should be held down while several other keys are pressed, enclose the code for those keys in parentheses. For example, to specify to hold down SHIFT while E and C are pressed, use "+(EC)". To specify to hold down SHIFT while E is pressed, followed by C without SHIFT, use "+EC".

To specify repeating keys, use the form {key number}. You must put a space between key and number. For example, {LEFT 42} means press the LEFT ARROW key 42 times; {h 10} means press H 10 times.