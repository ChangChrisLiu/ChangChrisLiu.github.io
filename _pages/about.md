---
layout: about
title: about
permalink: /
subtitle: Ph.D. Student, <a href='https://www.tamu.edu/'>Texas A&M University</a> · Mechanical Engineering

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Control and Robotics Lab</p>
    <p>Texas A&M University</p>
    <p>College Station, TX</p>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
---

I started my career studying internal combustion engines in Wuhan — which, looking back, was excellent training for understanding things that explode when you do something wrong. That instinct came in handy when I moved to Buffalo for my master's, where I built a collision prediction system so robots and humans could work together without, well, colliding. Turns out teaching a robot to not hit people is surprisingly difficult when the robot doesn't care about self-preservation.

After graduating, I joined a 3D printing company in California as a senior technical support engineer, managing 70+ clients and 300+ printers across the East Coast. I spent two and a half years helping American businesses automate their workflows, which taught me two things: (1) industry desperately needs smarter automation, and (2) printers of any kind will always find new ways to jam at the worst possible moment.

That experience brought me to Texas A&M, where I'm now doing my Ph.D. with [Dr. Minghui Zheng](https://people.tamu.edu/~mzheng/) in the Control and Robotics Lab. My research is about teaching robots to take apart old electronics — phones, desktops, anything that's reached its end of life. I work with the Department of Energy and Idaho National Lab on making this process automated and actually profitable, because it turns out the biggest barrier to recycling e-waste in America isn't technology, it's economics.

The technical side is where it gets fun. I build perception-to-action pipelines: the robot sees the product (YOLO, GNN, vision-language models), figures out what to do (sequence planning), and then actually does it (VLA models trained from 500+ human demonstrations I collected). My latest work, [SELF-VLA](https://arxiv.org/abs/2603.11080), is an agentic framework that improved success rates by over 40% — which in robotics means the robot went from "mostly confused" to "occasionally impressive." I also built a [data collection platform](https://github.com/ChangChrisLiu/DataCollection) and a 20,000+ image dataset, because my robot apparently needs more training data than I needed coffee during quals.

Looking ahead, I'm working toward giving robots the full package: real-time planning under uncertainty, learning from human demonstrations (including with humanoid hands), and reinforcement learning in simulation so they can fail cheaply before failing expensively in the real world. The end goal is a complete robotic remanufacturing platform that turns e-waste from a costly liability into a profitable resource — and maybe, eventually, robots that can take apart things as well as a determined toddler.
