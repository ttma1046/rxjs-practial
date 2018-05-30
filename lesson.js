const { Observable, interval, fromEvent, Subject, ReplaySubject, from, of, range, throwError } = rxjs;
const { map, filter, switchMap, tap, scan, catchError } = rxjs.operators;

/*range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x));
*/
const button = document.querySelector('button');
const buttonObservable = fromEvent(button, 'click');
const intervalObservable = interval(1000);
// buttonObservable.subscribe(() => print('Click Me!'));

buttonObservable.pipe(
    switchMap(
        () => intervalObservable
    )
)
.subscribe(i => print(i));

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

const span = document.querySelector('span');

const obs1 = fromEvent(input1, 'input');

const obs2 = fromEvent(input2, 'input');

obs1.mergeMap(
    event1 => {
        return obs2.map(event2 => event1.target.value + ' ' + event2.target.value)
    }
).subscribe(
    combinedValue => span.textContext = combinedValue
);

/*
buttonObservable.pipe(
    switchMap(click => interval(1000))
)
.subscribe(i => print(i));
*/

/*const observable = Rx.Observable.create(observer => {
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


const completion = Rx.Observable.timer(1000);

completion
    .finalize(() => print('Completion All done!'))
    .subscribe();

const interval = Rx.Observable.interval(1000)                    
                    .finalize(() => print('All done!'))

const subscription = interval.subscribe(x => print(x));

setTimeout(() => {
    subscription.unsubscribe()
}, 3000)


const numbers = Rx.Observable.of(10, 100, 1000);

numbers
    .map(num => Math.log(num))
    .subscribe(x => print(x));


const jsonString = '{"type": "Dog", "breed": "Pug"}'
const apiCall = Rx.Observable.of(jsonString);

apiCall.map(json => JSON.parse(json))
        .subscribe(obj => {
            print(obj.type)
            print(obj.breed)
        })


const names = Rx.Observable.of('Simon', 'Garfunkle');

names
    .tap(name => print(name))
    .map(name => name.toUpperCase())
    .tap(name => print(name))
    .subscribe()


const filternumbers = Rx.Observable.of(-3, 5, 7, 2, -7, 9, -2);

filternumbers
    .filter(n => n >= 0)
    .subscribe(n => print(n))

filternumbers
    .first()
    .subscribe(n => print(n))

filternumbers
    .last()
    .subscribe(n => print(n))


let mouseEvents = Rx.Observable.fromEvent(document, 'mousemove')

mouseEvents
    .throttleTime(1000)
    .subscribe(e => print(e.type));

let debounceMouseEvents = Rx.Observable.fromEvent(document, 'mousemove')

debounceMouseEvents
    .debounceTime(1000)
    .subscribe(e => print(e.type));

let calclicks = Rx.Observable.fromEvent(document, 'click');

calclicks
    .map(e => parseInt(Math.random() * 10))
    .tap(score => print(`click scored + ${score}`))
    .scan((highScore, score) => highScore + score)
    .subscribe(highScore => print(highScore));
    */


/*let switchMapClicks = Rx.Observable.fromEvent(document, 'click');

switchMapClicks.switchMap(click => {
    return Rx.Observable.interval(500);
}).subscribe(i => print(i));
*/
/*

// takeUntil
const interval = Rx.Observable.interval(500);
const notifier = Rx.Observable.timer(2000);

interval
    .takeUntil(notifier)
    .finalize(() => print('Complete!'))
    .subscribe(i => print(i));

// takeWhile
const names = Rx.Observable.of('Bob', 'Jeff', 'Doug', 'Steve');

names
    .takeWhile(name => name != 'Doug')
    .finalize(() => print('Complete! I found Doug'))
    .subscribe(i => print(i));

// zip
const yin = Rx.Observable.of('peanut butter', 'wine', 'rainbows');
const yang = Rx.Observable.of('jelly', 'cheese', 'unicorns').delay(2000);

const combo = Rx.Observable.zip(yin, yang);
combo.subscribe(arr => print(arr));


// .forkJoin()

const yinnew = Rx.Observable.of('peanut butter', 'wine', 'rainbows');
const yangnew = Rx.Observable.of('jelly', 'cheese', 'unicorns').delay(2000);

const combonew = Rx.Observable.forkJoin(yinnew, yangnew);

combonew.subscribe(arr => print(arr));
*/
// .catchError()
/*
const observable = Rx.Observable.create(observer => {
    observer.next('good');
    observer.next('great');
    observer.next('grand');

    // throwError 'catch me!';

    observer.next('wonderful');
})

observable
    .catchError(error => print(`Error caught: ${error}`))
    .retry(2)
    .subscribe(val => print(val))





const subject = new Rx.Subject();

const subA = subject.subscribe(val => print(`Sub A: ${val}`));
const subB = subject.subscribe(val => print(`Sub B: ${val}`));

subject.next('Hello');

setTimeout(() => {
    subject.next('World');
}, 1000)
*/
const observable = Observable.create(observer => {
    observer.next('hello');
    observer.next('world');
})

observable.subscribe(val => print(val));

/*
const test = fromEvent(document, 'click')
                .pipe(
                    tap(_ => print('Do One Time!'))
                    )

test.subscribe(() => print('test'));
*/

function print(val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}






















