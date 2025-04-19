---
title: Physics Book - Induction and Inductance for JEE & NEET
description: Learn electromagnetic induction and inductance for JEE and NEET, covering Faraday’s law, motional EMF, inductance, and LR circuits, with practice MCQs.
slug: book/physics/induction-inductance
keywords: physics induction inductance, JEE physics Faraday’s law, NEET physics mutual inductance, electromagnetism
og:image: https://vidyamarg.com/og-physics-induction-inductance.jpg
---

# Chapter 30: Induction and Inductance

Electromagnetic induction and inductance are key to generating electric currents and storing energy in magnetic fields, powering devices like transformers and inductors. This chapter explores Faraday’s law and Lenz’s law, induced electric fields and motional EMF, self-inductance and mutual inductance, and energy stored in inductors and LR circuits. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on induced currents, circuit behavior, and energy calculations. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master induction and inductance in competitive exams, ensuring precision and conceptual clarity.

## 30.1 Faraday’s Law and Lenz’s Law

**Faraday’s law** states that the induced electromotive force (EMF) in a closed loop is \( \mathcal{E} = -\frac{d\Phi_B}{dt} \), where \( \Phi_B = \int \vec{B} \cdot d\vec{A} \) is the magnetic flux. **Lenz’s law** dictates that the induced current opposes the change in flux. JEE/NEET problems involve calculating EMF or determining current direction. *Fundamentals of Physics* emphasizes the negative sign in Faraday’s law as Lenz’s law’s consequence.

**Solved Example**: A JEE Main problem involves a circular loop (radius 0.1 m) in a magnetic field \( B = 0.5 \, \text{T} \) decreasing at 0.02 T/s. Calculate the induced EMF.
- **Solution**: Flux: \( \Phi_B = B \pi r^2 \). Given \( r = 0.1 \, \text{m} \), \( \pi r^2 = \pi \times 0.01 = 0.03142 \, \text{m}^2 \). Rate: \( \frac{d\Phi_B}{dt} = \pi r^2 \frac{dB}{dt} = 0.03142 \times (-0.02) = -6.284 \times 10^{-4} \, \text{Wb/s} \). EMF: \( \mathcal{E} = -\frac{d\Phi_B}{dt} = 6.284 \times 10^{-4} \, \text{V} \approx 6.28 \times 10^{-4} \, \text{V} \) (3 significant figures, April 14, 2025). This is a standard JEE Faraday’s law problem.
  - **JEE Tip**: Compute flux change; ignore negative sign for magnitude. Common error: Incorrect area or rate.

**Solved Example**: A NEET problem asks the direction of induced current in a loop when the magnetic field into the plane decreases.
- **Solution**: Lenz’s law: Induced current opposes flux decrease, producing a field into the plane. Right-hand rule: Current is **clockwise**. Option (a) “Clockwise” is correct. This is a typical NEET Lenz’s law problem.
  - **NEET Tip**: Use Lenz’s law to oppose change; apply right-hand rule. Common error: Reversing direction.

## 30.2 Induced Electric Fields and Motional EMF

An **induced electric field** arises from a changing magnetic field, given by \( \oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \). **Motional EMF** occurs when a conductor moves in a magnetic field: \( \mathcal{E} = B L v \sin\theta \), where \( L \) is length, \( v \) is velocity, and \( \theta \) is the angle. JEE/NEET problems involve calculating EMF or fields. *University Physics* connects motional EMF to generators.

**Solved Example**: A JEE Advanced problem involves a rod (length 0.2 m) moving at 5 m/s perpendicular to a 0.3 T field. Calculate the motional EMF.
- **Solution**: Motional EMF: \( \mathcal{E} = B L v \). Given \( B = 0.3 \, \text{T} \), \( L = 0.2 \, \text{m} \), \( v = 5 \, \text{m/s} \), \( \theta = 90^\circ \): \( \mathcal{E} = 0.3 \times 0.2 \times 5 = 0.3 \, \text{V} \approx 0.300 \, \text{V} \). This is a classic JEE motional EMF problem.
  - **JEE Tip**: Ensure perpendicularity; multiply directly. Common error: Including angle factor.

**Solved Example**: A NEET problem involves a conductor moving in a magnetic field. What induces the EMF?
- **Solution**: EMF is induced by the **motion** of the conductor in the magnetic field, producing a motional EMF. Option (a) “Motion” is correct. This is a typical NEET motional EMF problem.
  - **NEET Tip**: Motional EMF requires motion; distinguish from flux change. Common error: Assuming static field change.

## 30.3 Self-Inductance and Mutual Inductance

**Self-inductance** (\( L \)) of a coil is defined by \( \mathcal{E} = -L \frac{dI}{dt} \), where \( L = \frac{N \Phi_B}{I} \), measured in henries (H). **Mutual inductance** (\( M \)) between two coils is \( \mathcal{E}_2 = -M \frac{dI_1}{dt} \). JEE/NEET problems involve calculating inductance or induced EMF. *Fundamentals of Physics* connects inductance to circuit dynamics.

**Solved Example**: A JEE Main problem involves a solenoid (length 0.5 m, 1000 turns, area 0.01 m², current changing at 2 A/s). Calculate the self-induced EMF.
- **Solution**: Inductance: \( L = \mu_0 \frac{N^2 A}{l} \). Given \( N = 1000 \), \( A = 0.01 \, \text{m}^2 \), \( l = 0.5 \, \text{m} \): \( L = 4\pi \times 10^{-7} \times \frac{1000^2 \times 0.01}{0.5} = 4\pi \times 10^{-7} \times 2 \times 10^4 \approx 2.513 \times 10^{-2} \, \text{H} \). EMF: \( \mathcal{E} = L \frac{dI}{dt} = 2.513 \times 10^{-2} \times 2 = 5.026 \times 10^{-2} \, \text{V} \approx 5.03 \times 10^{-2} \, \text{V} \). This is a standard JEE inductance problem.
  - **JEE Tip**: Compute \( L \) first; use rate of current change. Common error: Incorrect \( N^2 \).

**Solved Example**: A NEET problem asks the unit of inductance.
- **Solution**: Inductance is measured in **henries** (H), equivalent to V·s/A. Option (a) “Henry” is correct. This is a typical NEET unit problem.
  - **NEET Tip**: Relate to EMF equation; check SI units. Common error: Confusing with resistance.

## 30.4 Energy Stored in Inductors and LR Circuits

The **energy stored** in an inductor is \( U = \frac{1}{2} L I^2 \). In **LR circuits**, the current grows as \( I = \frac{\mathcal{E}}{R} (1 - e^{-t/\tau}) \), where \( \tau = \frac{L}{R} \) is the time constant. JEE/NEET problems involve calculating energy or current transients. *University Physics* connects LR circuits to energy storage applications.

**Solved Example**: A JEE Advanced problem involves an inductor (\( L = 0.1 \, \text{H} \)) with 3 A current. Calculate the stored energy.
- **Solution**: Energy: \( U = \frac{1}{2} L I^2 \). Given \( L = 0.1 \, \text{H} \), \( I = 3 \, \text{A} \): \( U = \frac{1}{2} \times 0.1 \times 3^2 = \frac{1}{2} \times 0.1 \times 9 = 0.45 \, \text{J} \approx 0.450 \, \text{J} \). This is a classic JEE energy problem.
  - **JEE Tip**: Square current; include factor of \( \frac{1}{2} \). Common error: Omitting \( \frac{1}{2} \).

**Solved Example**: A NEET problem involves an LR circuit with \( \tau = 0.01 \, \text{s} \). What is the time constant’s unit?
- **Solution**: Time constant: \( \tau = \frac{L}{R} \), with units \( \text{H}/\Omega = \text{s} \). Option (a) “Seconds” is correct. This is a typical NEET LR circuit problem.
  - **NEET Tip**: Verify units; \( L/R \) yields seconds. Common error: Assuming other units.

## Review & Summary
- **Faraday’s Law**: \( \mathcal{E} = -\frac{d\Phi_B}{dt} \); Lenz’s law: Opposes flux change.
- **Motional EMF**: \( \mathcal{E} = B L v \sin\theta \); Induced field: \( \oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \).
- **Inductance**: Self: \( \mathcal{E} = -L \frac{dI}{dt} \); Mutual: \( \mathcal{E}_2 = -M \frac{dI_1}{dt} \).
- **Energy/LR**: Energy: \( U = \frac{1}{2} L I^2 \); LR current: \( I = \frac{\mathcal{E}}{R} (1 - e^{-t/\tau}) \).

## Quick Revision Section
- **Key Equations**:
  - Faraday’s law: \( \mathcal{E} = -\frac{d\Phi_B}{dt} \)
  - Motional EMF: \( \mathcal{E} = B L v \)
  - Self-inductance: \( L = \frac{N \Phi_B}{I} \)
  - Energy: \( U = \frac{1}{2} L I^2 \)
  - LR time constant: \( \tau = \frac{L}{R} \)
- **SI Units**: EMF (V), inductance (H), energy (J), time (s).
- **JEE/NEET Tips**: Apply Lenz’s law for direction, verify significant figures (April 14, 2025), sketch flux changes, check exponential terms in LR circuits.
- **Applications**: Transformers, generators, inductors in circuits.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of induction and inductance, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/induction-inductance/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make induction and inductance engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing Faraday’s law and flux changes coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*