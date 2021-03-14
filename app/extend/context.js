module.exports = {
    // api返回成功
    apiReturn(res = null, msg = "请求成功") {
        this.body = {
            msg,
            data: res
        }
    }
};