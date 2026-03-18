---
layout: page
title: Experience
permalink: /experience/
description: My journey from combustion engines to robot brains.
nav: true
nav_order: 3
---

## Where It All Started

I grew up in China with the kind of curiosity that made me take things apart long before I knew how to put them back together — a habit that, years later, would become my literal research topic. At [HUST](https://english.hust.edu.cn/) in Wuhan, I studied Energy and Power Engineering: thermodynamics, mechanical design, control fundamentals — the foundational language of how physical systems work. I spent four years understanding why machines move, how to design them, and what happens when something goes wrong (spoiler: usually noise, heat, and a professor's disappointed look). It was pure mechanical engineering, and I loved it. But somewhere along the way, I realized I wasn't just interested in how machines work — I wanted to make them *think*.

## Learning to Make Machines Think

That ambition brought me to the University at Buffalo for my master's. I shifted from hardware to intelligence: control theory, PID controllers, optimization, digital control, vehicle dynamics. The math was beautiful, but I wanted more than equations on a whiteboard. I joined [Dr. Zheng's](https://zh.engr.tamu.edu/) lab and got my hands on actual drones and robots — and that's when everything changed.

Working on human-robot collaboration, I saw the promise but also the limitations. Collaboration is great, but the real dream is *full autonomy* — robots that don't need a human babysitter. I kept thinking about humanoid robots: machines with human-like kinematics that could be teleoperated for dangerous tasks, and eventually learn to operate on their own. That insight led me to reinforcement learning and safety prediction, which became my thesis: a Deep-ConvLSTM model that predicts robot collisions from raw camera images at 95% accuracy — which in robotics means the robot was wrong only every twentieth time, which is... actually still terrifying.

## The Industry Reality Check

After my master's, I made a decision that surprised everyone in my lab: I went to industry. I joined [HeyGears](https://www.heygears.com/) in California as a senior technical support engineer. It was a culture shock. In academia, I could spend weeks perfecting an algorithm. At HeyGears, I had 70+ clients calling about 300+ printers, and nobody cared about my convergence theorems.

I had to learn to communicate, negotiate, and solve problems not with elegant math but with my hands and a phone full of urgent voicemails. I became the bridge between angry customers and our R&D team, translating "this thing is broken and I'm losing $10,000 a day" into actionable engineering specs. It completely stripped away my academic comfort zone.

But the most important lesson was watching what happened when we brought automation to our clients. Every single one got excited. Their businesses grew. The catch? Those PLC-based systems were reliable but rigid — they could do routine jobs but couldn't adapt. I kept thinking: *what if these were real robots that could handle uncertainty and learn new tasks?* I saw the massive gap between what industry needed and what existing automation could deliver. And I knew I wanted to close it.

## Back to the Lab (With a Purpose)

That conviction brought me back to academia at Texas A&M. Everything I build now is driven by one principle: *it has to work in the real world*. Not on a simulation benchmark no factory would care about. Not on a task so contrived no engineer would waste a robot on it.

My current work: the robot sees the product ([YOLO](https://docs.ultralytics.com/) detection, GNN reasoning, VLM decision-making), plans the disassembly sequence, and executes it using VLA models trained from 500+ demonstrations I collected via my [teleoperation pipeline](https://github.com/ChangChrisLiu/DataCollection). I've built a 20,000+ image multimodal dataset, and my latest work [SELF-VLA](https://arxiv.org/abs/2603.11080) improved success rates by over 40% — which, given how often robots fumble with small screws, felt like a genuine milestone.

## What's Next

The tools for real robotic intelligence — LLMs, VLMs, VLAs, world models — are maturing fast. Autonomous driving went from "interesting research" to "cars on the road" in a decade. I believe industrial robotics is on the same trajectory.

My goal: design, improve, and deploy humanoid robots for industrial automation. Not just algorithms — complete systems that perceive, plan, learn, and adapt. The gap between a lab demo and a deployed industrial system is enormous — and my time in industry taught me exactly how enormous. That's the gap I want to close.
