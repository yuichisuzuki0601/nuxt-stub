module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    // add your custom rules here (alphabetical order)
    rules: {
        // カンマの前後にスペース入れる？
        "comma-spacing": "error",
        // 配列のindexには空白入れるな(hogehoge[ x ])
        "computed-property-spacing": "error",
        // 関数とカッコはあけない(function hoge() {/** */})
        "func-call-spacing": ["error", "never"],
        // jsのインデントはタブ
        "indent": ["error", "tab"],
        // プロパティのキーと値の間の間隔を強制({ key: value })
        "key-spacing": "error",
        // キーワードの前後には適切なスペースを
        "keyword-spacing": "error",
        // コンソールは許可
        "no-console": "off",
        // 不要なカッコは消す
        "no-extra-parens": "error",
        // 無駄なスペースは削除
        "no-multi-spaces": "error",
        // 不要な空白行は削除。2行開けてたらエラー
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        // true/falseを無駄に使うな
        "no-unneeded-ternary": "error",
        // 未使用変数は警告
        "no-unused-vars": "warn",
        // varは禁止
        "no-var": "error",
        // 文字列はシングルクオートのみ
        "quotes": ["error", "single"],
        // セミコロンをつける
        "semi": ["error", "always"],
        // かっこの中はスペースなし！違和感
        "space-in-parens": ["error", "never"],
        // htmlのインデントはタブ
        "vue/html-indent": ["error", "tab", {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        // 単体タグを許可
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "always",
                "normal": "always",
                "component": "always"
            },
            "svg": "always",
            "math": "always"
        }],
    }
}