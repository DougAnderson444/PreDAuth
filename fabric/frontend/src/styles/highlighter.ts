import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, palette, spacing }) => ({
    '@global': {
        '.hljs': {
            display: 'block',
            overflowX: 'auto',
            padding: spacing(1),
            color: '#383a42',
            background: palette.background.default
        },
        '.hljs-comment, .hljs-quote': {
            color: '#a0a1a7',
            fontStyle: 'italic'
        },
        '.hljs-doctag, .hljs-keyword, .hljs-formula': {
            color: '#a626a4'
        },
        '.hljs-section, .hljs-name, .hljs-selector-tag, .hljs-deletion, .hljs-subst': {
            color: '#e45649'
        },
        '.hljs-literal': {
            color: '#0184bb'
        },
        '.hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta-string': {
            color: '#50a14f'
        },
        '.hljs-built_in, .hljs-class .hljs-title': {
            color: '#c18401'
        },
        '.hljs-attr, .hljs-variable, .hljs-template-variable, .hljs-type, .hljs-selector-class, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-number': {
            color: '#986801'
        },
        '.hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-id, .hljs-title': {
            color: '#4078f2'
        },
        '.hljs-emphasis': {
            fontStyle: 'italic'
        },
        '.hljs-strong': {
            fontWeight: 'bold'
        },
        '.hljs-link': {
            textDecoration: 'underline'
        }
    },
    pre: {
        ...typography.body1,
        margin: 0
    }
}));
