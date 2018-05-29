const observable = Rx.Observable.create(observer => {
    observer.next('hello');
    observer.next('world');
    observer.next('Test');
})

observable.subscribe(val => print(val));

const clicks = Rx.Observable.fromEvent(document, 'click');

clicks.subscribe((click) => console.log(click));

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved!')
    }, 1000)
})

const obsevPromise = Rx.Observable.fromPromise(promise);

obsevPromise.subscribe(result => print(result));

const timer = Rx.Observable.timer(1000);

timer.subscribe(done => print('ding!!!'));

// const interval = Rx.Observable.interval(1000);

// interval.subscribe(done => print(new Date().getSeconds()));

const mashup = Rx.Observable.of('anything', ['you', 'want'], 3242424, true, {cool: 'stuff'});

mashup.subscribe(tick => print(tick));

const x = Math.random()

const hot = Rx.Observable.create(observer => {
    observer.next(x);
})

hot.subscribe(a => print(`hot Subscriber A: ${a}`));
hot.subscribe(a => print(`hot Subscriber B: ${a}`));



const cold = Rx.Observable.create(observer => {
    observer.next(Math.random());
})

cold.subscribe(a => print(`Cold Subscriber A: ${a}`));
cold.subscribe(a => print(`Cold Subscriber B: ${a}`));


const hotvtwo = cold.publish();

hotvtwo.subscribe(a => print(`Cold Subscriber A: ${a}`));
hotvtwo.subscribe(a => print(`Cold Subscriber B: ${a}`));

hotvtwo.connect();

function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}

const completion = Rx.Observable.timer(1000);

completion
    .finally(() => print('Completion All done!'))
    .subscribe();

const interval = Rx.Observable.interval(1000)                    
                    .finally(() => print('All done!'))

const subscription = interval.subscribe(x => print(x));

setTimeout(() => {
    subscription.unsubscribe()
}, 3000)