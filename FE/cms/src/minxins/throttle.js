export const throttle = {
    methods:{
        // 函数节流，频繁操作中间隔 delay 的时间才处理一次
        throttle(fn, delay = 200) {
            let self = this
            return function (...args) {
                if (!self.canRun) {
                    return;
                }
                self.canRun = false;
                setTimeout(() => {
                    fn.apply(this, args)
                    console.log('throttle')
                    self.canRun = true
                }, delay)
            }
        }
    }
}