---
layout: page
title: About
permalink: /about/
---

Tiny Machine Learning (tinyML) is an emerging field of applied machine learning (ML) that focuses on running ML models on ultra-low-power embedded systems. The goal of this tutorial/workshop is to introduce people to the field of tinyML, showcase its unique applications and real-world use cases and dive into the underlying hardware and software that makes it tick. In this tutorial, we focus on efficient hardware and software deployment for tinyML systems. To that end, the first half of the tutorial dives into TensorFlow Lite Micro, an embedded machine learning framework for running ML models that are a few hundreds of KBs on tinyML hardware. The second half of the tutorial focuses on CFU Playground, a framework that an engineer, intern, or student can use to design and evaluate enhancements to an FPGA-based “soft” processor, specifically to increase the performance of machine learning (ML) tasks. This combination of hardware and software showcases the flexibility and strengths of open-source frameworks and hardware to rapidly explore the design space for developing model-specific accelerators for tinyML.

### What is the goal of the workshop?
- What are some of the challenges and opportunities for designing tinyML hardware?
- How can we design and develop model-specific accelerators quickly on FPGAs?
- Get hands-on knowledge on how to build an ML accelerator using CFU playground

### Who is the audience for this workshop?
- Computer organization class students
- Computer architecture researcher students and practitioners

### Topics
- Introduction to tinyML
	- What is tinyML
	- Why is it an emerging field
	- What are the challenges for tinyML
- Introduction to TensorFlow Lite Micro
	- What is TFLM
	- How do we use it?
	- How do we run models on it?
- Introduction to CFU Playground
	- What is it
	- Why is it important
	- What can you do with it
- Hands-on tinyML on FPGAs
	- Get environment setup 
	- Introduction to Litex 
	- Walkthrough MobileNetV2 example
	- Implement your own model and CFU and see what speed up students can achieve!

### Schedule Breakdown

<div>
<table>
<thead>
  <tr>
    <th>Time</th>
    <th>Material/Activity</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>9:00 AM</td>
    <td>Welcome &amp; Introduction to tinyML
    	<ul>
    	<li>General overview of tinyML as a field</li>
    	<li>What are the common use cases</li>
    	<li>What kind of models do we run</li>
    	<li>What are the typical resource constraints and challenges etc.</li>
    	</ul>
    </td>
  </tr>
  <tr>
    <td>10:00 AM</td>
    <td>Introduction to TensorFlow Lite Micro (TFLM) 
    	<ul>
    		<li>Challenges for running tinyML models</li>
			<li>TF vs. TFLite vs TFLite Micro - deep dive</li>
			<li>Profiling and benchmarking tinyML systems</li>
    	</ul>
	</td>
  </tr>
  <tr>
    <td>11:00 AM</td>
    <td>Introduction to CFU Playground &amp; Environment Setup 
    	<ul>
    		<li>General overview of CFU</li>
			<li>Make sure Vivado hardware manager can find board</li>
			<li>Install RISC-V toolchain</li>
			<li>Pass golden tests</li>
    	</ul>
	</td>
  </tr>
  <tr>
    <td>12:00 PM</td>
    <td>Lunch</td>
  </tr>
  <tr>
    <td>1:00 PM</td>
    <td>Introduction to nMigen & Simple Example
		<ul>
			<li>What is Litex</li>
			<li>Explain basic Litex SoC with an example</li>
			<li>Walkthrough simple end-to-end example from README</li>
		</ul>
	</td>
  </tr>
  <tr>
    <td>2:00-5:00 PM</td>
    <td>Accelerate Your Own Model
    	<ul>
			<li>Pick a task and train a model using TFLM</li>
			<li>Get it running on the board</li>
			<li>Build your own CFU</li>
			<li>Measure performance speed up</li>
    	</ul>
    </td>
  </tr>
</tbody>
</table>
</div>

<!-- You can find the source code for Minima at GitHub:
[jekyll][jekyll-organization] /
[minima](https://github.com/jekyll/minima)

You can find the source code for Jekyll at GitHub:
[jekyll][jekyll-organization] /
[jekyll](https://github.com/jekyll/jekyll)


[jekyll-organization]: https://github.com/jekyll -->
