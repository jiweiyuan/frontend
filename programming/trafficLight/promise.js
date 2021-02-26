// 绿灯亮3s 黄灯亮1s 红灯亮2s 循环持续不断
// promise 方案
console.time('trafficLight')
const green = () => {
    console.timeLog('trafficLight')
    console.log('绿灯亮3s')
}
const yellow = () => {
    console.timeLog('trafficLight')
    console.log('黄灯亮1s')
}
const red = () => {
    console.timeLog('trafficLight')
    console.log('红灯亮2s')
}


function task(fn, time) {
    return new Promise(resolve => {
        fn()
        setTimeout(() => {
            resolve()
        }, time)
    })
}

const step = () => {
    task(green, 3000)
        .then(() => task(yellow, 1000))
        .then(() => task(red, 2000))
        .then(step)
}
step()
