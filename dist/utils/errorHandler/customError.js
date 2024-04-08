class customError extends Error {
    constructor({ code, message }) {
        super(message);
        this.code = code;
    }
}
//# sourceMappingURL=customError.js.map