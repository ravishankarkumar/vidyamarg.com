---
title: Physics Book - Circuits for JEE & NEET
description: Learn DC circuits for JEE and NEET, covering series and parallel resistors, Kirchhoff’s laws, loop circuits, and RC circuits, with practice MCQs.
slug: book/physics/circuits
keywords: physics circuits, JEE physics Kirchhoff’s laws, NEET physics RC circuits, current electricity
og:image: https://vidyamarg.com/og-physics-circuits.jpg
---

# Chapter 27: Circuits

DC circuits combine resistors, capacitors, and voltage sources, enabling complex electrical systems. This chapter explores series and parallel resistors, Kirchhoff’s laws, single-loop and multi-loop circuits, and RC circuits. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on circuit analysis, current distribution, and time-dependent behavior. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master circuits in competitive exams, ensuring precision and conceptual clarity.

## 27.1 Series and Parallel Resistors

In **series**, resistors share the same current, with equivalent resistance \( R_{\text{eq}} = R_1 + R_2 + \dots \). In **parallel**, resistors share the same voltage, with \( \frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots \). JEE/NEET problems involve calculating equivalent resistance or current/voltage distribution. *Fundamentals of Physics* emphasizes simplifying circuits systematically.

**Solved Example**: A JEE Main problem involves three resistors \( R_1 = 2 \, \Omega \), \( R_2 = 3 \, \Omega \), \( R_3 = 6 \, \Omega \), with \( R_1 \) and \( R_2 \) in series, connected in parallel with \( R_3 \), across a 12 V battery. Calculate the total current.
- **Solution**: Series: \( R_{12} = 2 + 3 = 5 \, \Omega \). Parallel: \( \frac{1}{R_{\text{eq}}} = \frac{1}{5} + \frac{1}{6} = \frac{6 + 5}{30} = \frac{11}{30} \), \( R_{\text{eq}} = \frac{30}{11} \approx 2.727 \, \Omega \). Current: \( I = \frac{V}{R_{\text{eq}}} = \frac{12}{30/11} = \frac{12 \times 11}{30} \approx 4.40 \, \text{A} \) (3 significant figures, April 14, 2025). This is a standard JEE circuit problem.
  - **JEE Tip**: Simplify series first, then parallel; use Ohm’s law. Common error: Adding resistances directly in parallel.

**Solved Example**: A NEET problem involves two resistors \( R_1 = 4 \, \Omega \), \( R_2 = 4 \, \Omega \) in parallel, connected to a 8 V battery. Calculate the equivalent resistance.
- **Solution**: Parallel: \( \frac{1}{R_{\text{eq}}} = \frac{1}{4} + \frac{1}{4} = \frac{2}{4} = \frac{1}{2} \), \( R_{\text{eq}} = 2 \, \Omega \). Option (a) “2 Ω” is correct. This is a typical NEET parallel problem.
  - **NEET Tip**: Sum reciprocals in parallel; invert for equivalent. Common error: Adding resistances directly.

## 27.2 Kirchhoff’s Laws

**Kirchhoff’s Current Law (KCL)**: The sum of currents entering a junction equals the sum leaving, \( \sum I_{\text{in}} = \sum I_{\text{out}} \). **Kirchhoff’s Voltage Law (KVL)**: The sum of potential differences around a closed loop is zero, \( \sum V = 0 \). JEE/NEET problems involve applying Kirchhoff’s laws to find currents or voltages. *University Physics* emphasizes loop and junction analysis.

**Solved Example**: A JEE Advanced problem involves a circuit with a 12 V battery, resistors \( R_1 = 3 \, \Omega \), \( R_2 = 6 \, \Omega \) in parallel, and \( R_3 = 2 \, \Omega \) in series with the parallel combination. Calculate the current through \( R_1 \).
- **Solution**: Parallel: \( \frac{1}{R_{12}} = \frac{1}{3} + \frac{1}{6} = \frac{3}{6} \), \( R_{12} = 2 \, \Omega \). Total: \( R_{\text{eq}} = 2 + 2 = 4 \, \Omega \). Total current: \( I = \frac{12}{4} = 3 \, \text{A} \). Voltage across parallel: \( V_{12} = I R_{12} = 3 \times 2 = 6 \, \text{V} \). Current through \( R_1 \): \( I_1 = \frac{V_{12}}{R_1} = \frac{6}{3} = 2 \, \text{A} \). This is a classic JEE Kirchhoff problem.
  - **JEE Tip**: Apply KCL for current splits; use Ohm’s law. Common error: Incorrect parallel resistance.

**Solved Example**: A NEET problem asks the sum of currents entering a junction in a circuit where three currents enter and two leave, with one entering current as 2 A and one leaving as 1 A.
- **Solution**: KCL: \( \sum I_{\text{in}} = \sum I_{\text{out}} \). If 2 A enters and 1 A leaves, the net current balance holds. The sum of entering currents includes the known 2 A, but without full data, KCL ensures equality. Option (a) “Equal to leaving currents” is correct. This is a typical NEET KCL problem.
  - **NEET Tip**: KCL balances currents; focus on junctions. Common error: Ignoring direction.

## 27.3 Single-Loop and Multi-Loop Circuits

**Single-loop circuits** involve one current path, analyzed using KVL. **Multi-loop circuits** require multiple KVL equations and KCL at junctions. JEE/NEET problems involve solving for currents or voltages in complex circuits. *Fundamentals of Physics* emphasizes systematic loop analysis.

**Solved Example**: A JEE Advanced problem involves a multi-loop circuit with a 10 V battery, resistors \( R_1 = 2 \, \Omega \), \( R_2 = 3 \, \Omega \), \( R_3 = 4 \, \Omega \), and a 5 V battery in a two-loop configuration (loop 1: 10 V, \( R_1 \), \( R_2 \); loop 2: 5 V, \( R_2 \), \( R_3 \)). Calculate the current through \( R_2 \).
- **Solution**: Assign currents: \( I_1 \) through loop 1, \( I_2 \) through loop 2. KCL at junction: \( I_1 = I_2 + I_3 \), where \( I_3 \) is through \( R_2 \). Loop 1 (10 V, \( R_1 \), \( R_2 \)): \( 10 - 2 I_1 - 3 I_3 = 0 \). Loop 2 (5 V, \( R_2 \), \( R_3 \)): \( 5 - 3 I_3 - 4 I_2 = 0 \). KCL: \( I_3 = I_1 - I_2 \). Substitute: Loop 1: \( 10 - 2 I_1 - 3 (I_1 - I_2) = 0 \), \( 10 - 5 I_1 + 3 I_2 = 0 \). Loop 2: \( 5 - 3 (I_1 - I_2) - 4 I_2 = 0 \), \( 5 - 3 I_1 + 3 I_2 - 4 I_2 = 0 \), \( 5 - 3 I_1 - I_2 = 0 \). Solve: \( 5 I_1 - 3 I_2 = 10 \), \( 3 I_1 + I_2 = 5 \). Multiply second by 3: \( 9 I_1 + 3 I_2 = 15 \). Add: \( 14 I_1 = 25 \), \( I_1 \approx 1.786 \, \text{A} \). Then: \( I_2 = 5 - 3 \times 1.786 \approx -0.357 \, \text{A} \). Current through \( R_2 \): \( I_3 = 1.786 - (-0.357) \approx 2.143 \, \text{A} \approx 2.14 \, \text{A} \). This is a classic JEE multi-loop problem.
  - **JEE Tip**: Assign consistent current directions; solve KVL equations. Common error: Incorrect signs in KVL.

**Solved Example**: A NEET problem involves a single-loop circuit with a 6 V battery and two resistors \( R_1 = 2 \, \Omega \), \( R_2 = 4 \, \Omega \) in series. Calculate the current.
- **Solution**: Series: \( R_{\text{eq}} = 2 + 4 = 6 \, \Omega \). Current: \( I = \frac{V}{R_{\text{eq}}} = \frac{6}{6} = 1 \, \text{A} \). Option (a) “1 A” is correct. This is a typical NEET single-loop problem.
  - **NEET Tip**: Sum series resistances; apply Ohm’s law. Common error: Using parallel formula.

## 27.4 RC Circuits

**RC circuits** involve resistors and capacitors, with time-dependent behavior. The **time constant** is \( \tau = RC \). For charging: \( Q = C V (1 - e^{-t/\tau}) \); for discharging: \( Q = Q_0 e^{-t/\tau} \). JEE/NEET problems involve calculating currents, charges, or voltages over time. *University Physics* connects RC circuits to timing applications.

**Solved Example**: A JEE Main problem involves an RC circuit with \( R = 10 \, \Omega \), \( C = 100 \, \mu\text{F} \), and a 12 V battery. Calculate the time constant and charge on the capacitor after 0.001 s.
- **Solution**: Time constant: \( \tau = RC = 10 \times 100 \times 10^{-6} = 0.001 \, \text{s} \). Charging: \( Q = C V (1 - e^{-t/\tau}) \). Given \( V = 12 \, \text{V} \), \( t = 0.001 \, \text{s} \), \( \tau = 0.001 \, \text{s} \): \( Q = 100 \times 10^{-6} \times 12 \times (1 - e^{-1}) \approx 1.2 \times 10^{-3} \times 0.632 = 7.584 \times 10^{-4} \, \text{C} \approx 758 \, \mu\text{C} \). This is a standard JEE RC problem.
  - **JEE Tip**: Calculate \( \tau \) in seconds; use exponential decay. Common error: Incorrect units for capacitance.

**Solved Example**: A NEET problem involves an RC circuit with \( \tau = 0.002 \, \text{s} \). What is the time constant’s unit?
- **Solution**: Time constant: \( \tau = RC \), with units \( \Omega \cdot \text{F} = \text{s} \). Option (a) “Seconds” is correct. This is a typical NEET RC problem.
  - **NEET Tip**: Verify units; \( RC \) yields seconds. Common error: Assuming other units.

## Review & Summary
- **Series/Parallel**: Series: \( R_{\text{eq}} = \sum R_i \); Parallel: \( \frac{1}{R_{\text{eq}}} = \sum \frac{1}{R_i} \).
- **Kirchhoff’s Laws**: KCL: \( \sum I_{\text{in}} = \sum I_{\text{out}} \); KVL: \( \sum V = 0 \).
- **Loop Circuits**: Single-loop: One KVL equation; Multi-loop: Multiple KVL/KCL equations.
- **RC Circuits**: \( \tau = RC \); Charging: \( Q = C V (1 - e^{-t/\tau}) \); Discharging: \( Q = Q_0 e^{-t/\tau} \).

## Quick Revision Section
- **Key Equations**:
  - Series: \( R_{\text{eq}} = R_1 + R_2 + \dots \)
  - Parallel: \( \frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots \)
  - KCL: \( \sum I_{\text{in}} = \sum I_{\text{out}} \)
  - KVL: \( \sum V = 0 \)
  - Time constant: \( \tau = RC \)
- **SI Units**: Resistance (\( \Omega \)), current (A), voltage (V), capacitance (F), time (s).
- **JEE/NEET Tips**: Simplify circuits, verify significant figures (April 14, 2025), draw loop directions, check exponential terms in RC circuits.
- **Applications**: Electronics, timers, circuit design.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of circuits, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/circuits/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make circuits engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing circuit diagrams and Kirchhoff’s loops coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*