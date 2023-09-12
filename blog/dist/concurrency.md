# Useful Notions

## 函数式程序设计

消除了可变共享状态，因此天生具有线程安全特征，也更易于并行

## Clojure方法

分离身份与状态

## Actor模型

具有天然的并发属性，并增强了弹性和容错能力

[Applied Akka Patterns](https://learning.oreilly.com/library/view/applied-akka-patterns/9781491934876/ch01.html#reality-is-eventually-consistent)

- All computation is performed within an actor
- Actors can communicate only through messages
- In response to a message, an actor can:
    - Change its state or behaviour
    - Send messages to other actors
    - Create a finite number of child actors

## LOTOS (CSP/CCS)

关注并发主体的通信，以交互建模计算，简洁地刻画了计算地本质（包括并发）

## Petri Net和Colored Petri Net

描述并发问题和并发解决方案的流行模型

## 数据并行

利用GPU提速

## Lambda结构

结合MapReduce和流处理技术应对大数据挑战
