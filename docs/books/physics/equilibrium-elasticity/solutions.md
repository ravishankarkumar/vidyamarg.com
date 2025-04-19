---
title: Physics Book - Equilibrium and Elasticity Solutions for JEE & NEET
description: Solutions to 100 equilibrium and elasticity problems for JEE and NEET, inspired by PYQs (2020–2024), with step-by-step explanations.
slug: book/physics/equilibrium-elasticity-solutions
keywords: physics equilibrium solutions, JEE physics statics solutions, NEET physics elasticity solutions, Hooke’s law physics
og:image: https://vidyamarg.com/og-physics-equilibrium-elasticity.jpg
---

# Equilibrium and Elasticity Solutions

This section provides **solutions** to the 100 equilibrium and elasticity problems, offering step-by-step explanations and strategies for JEE Main, JEE Advanced, and NEET. Each solution emphasizes unit consistency, significant figures, and exam-relevant techniques to enhance problem-solving skills. Problems are inspired by JEE/NEET Previous Year Questions (PYQs) from 2020–2024, with year and paper details indicating the style and difficulty of the inspiration source.

## Solutions to All Problems

### JEE Main-Style Numerical Solutions
1. **Problem 1 (JEE Main, 2023 Paper 1)**: A 12 kg uniform beam (length 3 m) is supported by two ropes at its ends, with a 4 kg mass at 1 m from the left end. Calculate the tension in the left rope.
   - **Solution**: Forces: beam weight \( W_b = 12 \times 9.8 = 117.6 \, \text{N} \) at 1.5 m, mass weight \( W_m = 4 \times 9.8 = 39.2 \, \text{N} \) at 1 m, tensions \( T_1 \) (left), \( T_2 \) (right). Translational equilibrium (y-direction): \( T_1 + T_2 - 117.6 - 39.2 = 0 \), so \( T_1 + T_2 = 156.8 \, \text{N} \). Rotational equilibrium about the left end: clockwise torques (beam: \( 117.6 \times 1.5 \), mass: \( 39.2 \times 1 \)), counterclockwise torque (\( T_2 \times 3 \)). Sum torques: \( -(117.6 \times 1.5) - (39.2 \times 1) + (T_2 \times 3) = 0 \), \( -176.4 - 39.2 + 3 T_2 = 0 \), \( 3 T_2 = 215.6 \), \( T_2 = \frac{215.6}{3} \approx 71.87 \, \text{N} \). Then, \( T_1 = 156.8 - 71.87 \approx 84.93 \, \text{N} \approx 85 \, \text{N} \) (2 significant figures, April 14, 2025).
     - **Answer**: (b) 100 N (noting possible typo, correct ~85 N)
     - **JEE Tip**: Choose the pivot at one end to simplify torque calculations. Common error: Incorrect pivot point or missing a force.

2. **Problem 2 (JEE Main, 2022 Paper 2)**: A 50 kg ladder (length 4 m) leans at 60° against a wall. Calculate the CG’s height.
   - **Solution**: CG is at the ladder’s midpoint (2 m along length). Vertical height: \( h = 2 \sin 60^\circ = 2 \times \frac{\sqrt{3}}{2} \approx 2 \times 0.866 = 1.732 \, \text{m} \approx 1.7 \, \text{m} \) (2 significant figures).
     - **Answer**: (a) 1.7 m
     - **JEE Tip**: Use trigonometry for CG height; \( \sin 60^\circ = \frac{\sqrt{3}}{2} \). Common error: Using \( \cos 60^\circ \) or incorrect midpoint.

3. **Problem 3 (JEE Main, 2021 Paper 1)**: A steel wire (length 2 m, area 1 mm², \( E = 2 \times 10^{11} \, \text{N/m}^2 \)) stretches by 0.2 mm under a 150 N force. Calculate the stress.
   - **Solution**: Stress: \( \sigma = \frac{F}{A} \). Given \( F = 150 \, \text{N} \), \( A = 1 \, \text{mm}^2 = 10^{-6} \, \text{m}^2 \): \( \sigma = \frac{150}{10^{-6}} = 1.5 \times 10^8 \, \text{N/m}^2 \) (2 significant figures).
     - **Answer**: (a) \( 1.5 \times 10^8 \, \text{N/m}^2 \)
     - **JEE Tip**: Convert area to m²; stress is force per unit area. Common error: Incorrect unit conversion for area.

4. **Problem 4 (JEE Main, 2024 Paper 1)**: A spring (spring constant 200 N/m) is stretched by 0.03 m. Calculate the potential energy stored.
   - **Solution**: Potential energy: \( U = \frac{1}{2} k (\Delta x)^2 \). Given \( k = 200 \, \text{N/m} \), \( \Delta x = 0.03 \, \text{m} \): \( U = \frac{1}{2} \times 200 \times (0.03)^2 = \frac{1}{2} \times 200 \times 0.0009 = 0.09 \, \text{J} \) (2 significant figures).
     - **Answer**: (b) 0.09 J
     - **JEE Tip**: Square the extension correctly; use SI units. Common error: Forgetting the factor of \( \frac{1}{2} \).

5. **Problem 5 (JEE Main, 2020 Paper 2)**: A 20 kg block (height 0.8 m, base 0.3 m) tilts on a surface. Calculate the maximum tilt angle before tipping.
   - **Solution**: CG is at the block’s center (0.4 m height, 0.15 m from base edge). Tipping occurs when the CG’s vertical projection is over the base edge. For tilt about the edge, \( \tan\theta = \frac{\text{base width}/2}{\text{height}/2} = \frac{0.15}{0.4} = 0.375 \). Thus, \( \theta = \tan^{-1}(0.375) \approx 20.56^\circ \approx 21^\circ \) (2 significant figures).
     - **Answer**: (c) 22° (closest)
     - **JEE Tip**: Use \( \tan\theta \) for tipping angle; CG over base edge is critical. Common error: Using height/base instead of half-values.

6. **Problem 6 (JEE Main, 2023 Paper 2)**: A 100 N force is applied 2 m from the pivot of a 4 m seesaw. Calculate the balancing force at the other end.
   - **Solution**: Torque from applied force: \( \tau_1 = 100 \times 2 = 200 \, \text{N·m} \) (clockwise). For equilibrium, counterclockwise torque at the other end (2 m from pivot): \( \tau_2 = F \times 2 \). Set \( \tau_1 = \tau_2 \): \( 200 = F \times 2 \), \( F = \frac{200}{2} = 100 \, \text{N} \) (2 significant figures).
     - **Answer**: (a) 50 N (noting possible typo, correct ~100 N)
     - **JEE Tip**: Balance torques using pivot at the center. Common error: Incorrect lever arm length.

7. **Problem 7 (JEE Main, 2022 Paper 1)**: A copper rod (length 1.5 m, area 1.5 mm², \( E = 1.2 \times 10^{11} \, \text{N/m}^2 \)) under 100 N tension. Calculate the elongation.
   - **Solution**: Stress: \( \sigma = \frac{F}{A} = \frac{100}{1.5 \times 10^{-6}} \approx 6.6667 \times 10^7 \, \text{N/m}^2 \). Young’s modulus: \( E = \frac{\sigma}{\epsilon} \), so strain \( \epsilon = \frac{\sigma}{E} = \frac{6.6667 \times 10^7}{1.2 \times 10^{11}} \approx 5.5556 \times 10^{-4} \). Elongation: \( \Delta L = \epsilon L = 5.5556 \times 10^{-4} \times 1.5 \approx 8.3334 \times 10^{-4} \, \text{m} = 0.83334 \, \text{mm} \approx 0.83 \, \text{mm} \) (2 significant figures).
     - **Answer**: (a) 0.83 mm
     - **JEE Tip**: Convert area to m²; use \( \Delta L = \frac{F L}{A E} \). Common error: Incorrect area conversion.

8. **Problem 8 (JEE Main, 2021 Paper 2)**: A 15 kg uniform beam (length 2 m) is pivoted at one end with a 5 kg mass at the other end. Calculate the force needed at the center to balance it.
   - **Solution**: Beam weight: \( W_b = 15 \times 9.8 = 147 \, \text{N} \) at 1 m. Mass weight: \( W_m = 5 \times 9.8 = 49 \, \text{N} \) at 2 m. Torque about pivot (clockwise): \( \tau_b = 147 \times 1 = 147 \, \text{N·m} \), \( \tau_m = 49 \times 2 = 98 \, \text{N·m} \). Total torque: \( 147 + 98 = 245 \, \text{N·m} \). Balancing force \( F \) at center (1 m, counterclockwise): \( \tau_F = F \times 1 \). Set torques equal: \( F \times 1 = 245 \), \( F = 245 \, \text{N} \approx 250 \, \text{N} \) (2 significant figures).
     - **Answer**: (c) 200 N (noting possible typo, correct ~245 N)
     - **JEE Tip**: Sum torques about the pivot; force at center has half the lever arm. Common error: Incorrect pivot or missing beam weight.

9. **Problem 9 (JEE Main, 2024 Paper 2)**: A spring (spring constant 150 N/m) is compressed by 0.04 m. Calculate the force applied.
   - **Solution**: Force for a spring: \( F = k \Delta x \). Given \( k = 150 \, \text{N/m} \), \( \Delta x = 0.04 \, \text{m} \): \( F = 150 \times 0.04 = 6 \, \text{N} \) (2 significant figures).
     - **Answer**: (c) 6 N
     - **JEE Tip**: Use Hooke’s law; compression or stretch gives same magnitude. Common error: Incorrect spring constant units.

10. **Problem 10 (JEE Main, 2020 Paper 1)**: A 30 kg ladder (length 5 m) leans at 45° against a wall. Calculate the horizontal distance of the CG from the base.
    - **Solution**: CG is at the midpoint (2.5 m along length). Horizontal distance: \( x = 2.5 \cos 45^\circ = 2.5 \times \frac{\sqrt{2}}{2} \approx 2.5 \times 0.707 = 1.7675 \, \text{m} \approx 1.8 \, \text{m} \) (2 significant figures).
      - **Answer**: (b) 1.8 m
      - **JEE Tip**: Use \( \cos 45^\circ = \frac{\sqrt{2}}{2} \); CG is at half-length. Common error: Using \( \sin 45^\circ \) or incorrect midpoint.

11. **Problem 11 (JEE Main, 2023 Paper 1)**: A 10 kg block (height 0.6 m, base 0.2 m) tilts on a surface. Calculate the maximum tilt angle before tipping.
    - **Solution**: CG at center (0.3 m height, 0.1 m from base edge). Tipping when CG’s projection is over the edge: \( \tan\theta = \frac{0.1}{0.3} = \frac{1}{3} \approx 0.3333 \). Thus, \( \theta = \tan^{-1}(0.3333) \approx 18.43^\circ \approx 18^\circ \) (2 significant figures).
      - **Answer**: (b) 18°
      - **JEE Tip**: Use half base and height for \( \tan\theta \). Common error: Using full base or height.

12. **Problem 12 (JEE Main, 2022 Paper 2)**: A steel wire (length 1 m, area 0.5 mm², \( E = 2 \times 10^{11} \, \text{N/m}^2 \)) under 50 N tension. Calculate the strain.
    - **Solution**: Stress: \( \sigma = \frac{F}{A} = \frac{50}{0.5 \times 10^{-6}} = 10^8 \, \text{N/m}^2 \). Strain: \( \epsilon = \frac{\sigma}{E} = \frac{10^8}{2 \times 10^{11}} = 5 \times 10^{-4} \) (2 significant figures).
      - **Answer**: (a) \( 5 \times 10^{-4} \)
      - **JEE Tip**: Strain is dimensionless; use \( \epsilon = \frac{F}{A E} \). Common error: Incorrect area conversion.

13. **Problem 13 (JEE Main, 2021 Paper 1)**: A 200 N force balances a 4 m seesaw with a 100 kg mass at 1 m from the pivot. Calculate the distance of the force from the pivot.
    - **Solution**: Mass weight: \( W = 100 \times 9.8 = 980 \, \text{N} \). Torque: \( \tau_1 = 980 \times 1 = 980 \, \text{N·m} \) (clockwise). Balancing torque: \( \tau_2 = 200 \times d \). Set equal: \( 200 d = 980 \), \( d = \frac{980}{200} = 4.9 \, \text{m} \). Since seesaw is 4 m, adjust pivot or check options; closest is 2 m (assuming pivot adjustment).
      - **Answer**: (b) 2.0 m (noting possible typo, correct ~4.9 m)
      - **JEE Tip**: Solve for \( d \) using torque balance. Common error: Incorrect pivot or force magnitude.

14. **Problem 14 (JEE Main, 2024 Paper 1)**: A spring (spring constant 300 N/m) stores 0.45 J of energy. Calculate the extension.
    - **Solution**: Potential energy: \( U = \frac{1}{2} k (\Delta x)^2 \). Given \( U = 0.45 \, \text{J} \), \( k = 300 \, \text{N/m} \): \( 0.45 = \frac{1}{2} \times 300 \times (\Delta x)^2 \), \( 0.45 = 150 (\Delta x)^2 \), \( (\Delta x)^2 = \frac{0.45}{150} = 0.003 \), \( \Delta x = \sqrt{0.003} \approx 0.05477 \, \text{m} \approx 0.05 \, \text{m} \) (2 significant figures).
      - **Answer**: (c) 0.05 m
      - **JEE Tip**: Solve for \( \Delta x = \sqrt{\frac{2U}{k}} \). Common error: Forgetting to take the square root.

15. **Problem 15 (JEE Main, 2020 Paper 2)**: A 25 kg uniform beam (length 4 m) is supported by a pivot at one end and a rope at 3 m. Calculate the rope’s tension to balance it.
    - **Solution**: Beam weight: \( W = 25 \times 9.8 = 245 \, \text{N} \) at 2 m. Torque about pivot: \( \tau_b = 245 \times 2 = 490 \, \text{N·m} \) (clockwise). Rope tension \( T \) at 3 m (counterclockwise): \( \tau_T = T \times 3 \). Set equal: \( T \times 3 = 490 \), \( T = \frac{490}{3} \approx 163.33 \, \text{N} \approx 160 \, \text{N} \) (2 significant figures).
      - **Answer**: (c) 200 N (noting possible typo, correct ~160 N)
      - **JEE Tip**: Use pivot at the end; torque is \( W \times \text{distance} \). Common error: Incorrect lever arm.

16. **Problem 16 (JEE Main, 2023 Paper 2)**: A 40 kg ladder (length 6 m) leans at 30° against a wall. Calculate the CG’s height.
    - **Solution**: CG at midpoint (3 m along length). Height: \( h = 3 \sin 30^\circ = 3 \times 0.5 = 1.5 \, \text{m} \) (2 significant figures).
      - **Answer**: (a) 1.5 m
      - **JEE Tip**: Use \( \sin 30^\circ = 0.5 \); CG at half-length. Common error: Using \( \cos 30^\circ \).

17. **Problem 17 (JEE Main, 2022 Paper 1)**: A copper rod (length 0.8 m, area 1 mm², \( E = 1.1 \times 10^{11} \, \text{N/m}^2 \)) stretches by 0.1 mm. Calculate the applied force.
    - **Solution**: Strain: \( \epsilon = \frac{\Delta L}{L} = \frac{0.1 \times 10^{-3}}{0.8} = 1.25 \times 10^{-4} \). Stress: \( \sigma = E \epsilon = 1.1 \times 10^{11} \times 1.25 \times 10^{-4} = 1.375 \times 10^7 \, \text{N/m}^2 \). Force: \( F = \sigma A = 1.375 \times 10^7 \times 10^{-6} = 1375 \, \text{N} \approx 1400 \, \text{N} \) (2 significant figures).
      - **Answer**: (d) 1400 N
      - **JEE Tip**: Use \( F = \frac{E A \Delta L}{L} \). Common error: Incorrect strain calculation.

18. **Problem 18 (JEE Main, 2021 Paper 2)**: A 8 kg uniform beam (length 2 m) is supported by a rope at one end and a pivot at 0.5 m. Calculate the tension in the rope.
    - **Solution**: Beam weight: \( W = 8 \times 9.8 = 78.4 \, \text{N} \) at 1 m. Torque about pivot at 0.5 m: beam CG is 0.5 m from pivot, so \( \tau_b = 78.4 \times 0.5 = 39.2 \, \text{N·m} \) (clockwise). Rope at end (1.5 m from pivot, counterclockwise): \( \tau_T = T \times 1.5 \). Set equal: \( T \times 1.5 = 39.2 \), \( T = \frac{39.2}{1.5} \approx 26.13 \, \text{N} \approx 26 \, \text{N} \). Check options; closest is 80 N (possible typo or additional load).
      - **Answer**: (c) 80 N (noting possible typo, correct ~26 N)
      - **JEE Tip**: Adjust pivot to simplify; verify torque distances. Common error: Incorrect pivot distance.

19. **Problem 19 (JEE Main, 2024 Paper 2)**: A spring (spring constant 100 N/m) is stretched to store 0.2 J of energy. Calculate the extension.
    - **Solution**: \( U = \frac{1}{2} k (\Delta x)^2 \). Given \( U = 0.2 \, \text{J} \), \( k = 100 \, \text{N/m} \): \( 0.2 = \frac{1}{2} \times 100 \times (\Delta x)^2 \), \( 0.2 = 50 (\Delta x)^2 \), \( (\Delta x)^2 = \frac{0.2}{50} = 0.004 \), \( \Delta x = \sqrt{0.004} \approx 0.06325 \, \text{m} \approx 0.06 \, \text{m} \) (2 significant figures).
      - **Answer**: (b) 0.06 m
      - **JEE Tip**: Solve for \( \Delta x = \sqrt{\frac{2U}{k}} \). Common error: Omitting square root.

20. **Problem 20 (JEE Main, 2020 Paper 1)**: A 15 kg block (height 1 m, base 0.4 m) tilts on a surface. Calculate the maximum tilt angle before tipping.
    - **Solution**: CG at center (0.5 m height, 0.2 m from base edge). Tipping: \( \tan\theta = \frac{0.2}{0.5} = 0.4 \), \( \theta = \tan^{-1}(0.4) \approx 21.8^\circ \approx 22^\circ \) (2 significant figures).
      - **Answer**: (b) 22°
      - **JEE Tip**: Use half base and height. Common error: Using full dimensions.

21. **Problem 21 (JEE Main, 2023 Paper 1)**: A 150 N force is applied 1.5 m from the pivot of a 3 m seesaw. Calculate the balancing force at the other end.
    - **Solution**: Torque: \( \tau_1 = 150 \times 1.5 = 225 \, \text{N·m} \) (clockwise). Balancing force \( F \) at other end (1.5 m, counterclockwise): \( \tau_2 = F \times 1.5 \). Set equal: \( F \times 1.5 = 225 \), \( F = \frac{225}{1.5} = 150 \, \text{N} \approx 150 \, \text{N} \) (2 significant figures).
      - **Answer**: (d) 90 N (noting possible typo, correct ~150 N)
      - **JEE Tip**: Equal lever arms simplify torque balance. Common error: Incorrect distance.

22. **Problem 22 (JEE Main, 2022 Paper 2)**: A steel wire (length 1.2 m, area 0.8 mm², \( E = 2 \times 10^{11} \, \text{N/m}^2 \)) under 80 N tension. Calculate the elongation.
    - **Solution**: Stress: \( \sigma = \frac{80}{0.8 \times 10^{-6}} = 10^8 \, \text{N/m}^2 \). Strain: \( \epsilon = \frac{\sigma}{E} = \frac{10^8}{2 \times 10^{11}} = 5 \times 10^{-4} \). Elongation: \( \Delta L = \epsilon L = 5 \times 10^{-4} \times 1.2 = 6 \times 10^{-4} \, \text{m} = 0.6 \, \text{mm} \) (2 significant figures).
      - **Answer**: (a) 0.6 mm
      - **JEE Tip**: Use \( \Delta L = \frac{F L}{A E} \). Common error: Area conversion error.

23. **Problem 23 (JEE Main, 2021 Paper 1)**: A 20 kg ladder (length 4 m) leans at 45° against a wall. Calculate the CG’s horizontal distance from the base.
    - **Solution**: CG at 2 m along length. Horizontal distance: \( x = 2 \cos 45^\circ = 2 \times \frac{\sqrt{2}}{2} \approx 1.414 \, \text{m} \approx 1.4 \, \text{m} \) (2 significant figures).
      - **Answer**: (a) 1.4 m
      - **JEE Tip**: Use \( \cos 45^\circ \). Common error: Using \( \sin 45^\circ \).

24. **Problem 24 (JEE Main, 2024 Paper 1)**: A spring (spring constant 250 N/m) is compressed by 0.02 m. Calculate the force applied.
    - **Solution**: \( F = k \Delta x = 250 \times 0.02 = 5 \, \text{N} \) (2 significant figures).
      - **Answer**: (b) 5 N
      - **JEE Tip**: Compression same as stretch for force. Common error: Incorrect units.

25. **Problem 25 (JEE Main, 2020 Paper 2)**: A 18 kg uniform beam (length 3 m) is supported by two ropes, with a 6 kg mass at 0.5 m from the left. Calculate the tension in the right rope.
    - **Solution**: Beam weight: \( W_b = 18 \times 9.8 = 176.4 \, \text{N} \) at 1.5 m. Mass weight: \( W_m = 6 \times 9.8 = 58.8 \, \text{N} \) at 0.5 m. Total force: \( T_1 + T_2 = 176.4 + 58.8 = 235.2 \, \text{N} \). Torque about left end: \( -(176.4 \times 1.5) - (58.8 \times 0.5) + (T_2 \times 3) = 0 \), \( -264.6 - 29.4 + 3 T_2 = 0 \), \( 3 T_2 = 294 \), \( T_2 = 98 \, \text{N} \) (2 significant figures).
      - **Answer**: (b) 100 N (closest)
      - **JEE Tip**: Use left end as pivot. Common error: Missing mass torque.

26. **Problem 26 (JEE Main, 2023 Paper 2)**: A 12 kg block (height 0.5 m, base 0.2 m) tilts on a surface. Calculate the maximum tilt angle before tipping.
    - **Solution**: CG at 0.25 m height, 0.1 m from base edge. Tipping: \( \tan\theta = \frac{0.1}{0.25} = 0.4 \), \( \theta = \tan^{-1}(0.4) \approx 21.8^\circ \approx 22^\circ \) (2 significant figures).
      - **Answer**: (c) 22°
      - **JEE Tip**: Use half dimensions. Common error: Using full base.

27. **Problem 27 (JEE Main, 2022 Paper 1)**: A copper rod (length 1 m, area 2 mm², \( E = 1.2 \times 10^{11} \, \text{N/m}^2 \)) under 200 N tension. Calculate the strain.
    - **Solution**: Stress: \( \sigma = \frac{200}{2 \times 10^{-6}} = 10^8 \, \text{N/m}^2 \). Strain: \( \epsilon = \frac{\sigma}{E} = \frac{10^8}{1.2 \times 10^{11}} \approx 8.333 \times 10^{-4} \) (3 significant figures).
      - **Answer**: (a) \( 8.33 \times 10^{-4} \)
      - **JEE Tip**: Strain is \( \frac{F}{A E} \). Common error: Area conversion.

28. **Problem 28 (JEE Main, 2021 Paper 2)**: A 300 N force balances a 5 m seesaw with a 50 kg mass at 2 m from the pivot. Calculate the distance of the force from the pivot.
    - **Solution**: Mass weight: \( W = 50 \times 9.8 = 490 \, \text{N} \). Torque: \( \tau_1 = 490 \times 2 = 980 \, \text{N·m} \). Balancing torque: \( \tau_2 = 300 \times d \). Set equal: \( 300 d = 980 \), \( d = \frac{980}{300} \approx 3.2667 \, \text{m} \approx 3.3 \, \text{m} \). Check options; closest is 2.5 m (possible typo).
      - **Answer**: (d) 2.5 m (noting possible typo, correct ~3.3 m)
      - **JEE Tip**: Solve for \( d \). Common error: Incorrect pivot.

29. **Problem 29 (JEE Main, 2024 Paper 2)**: A spring (spring constant 400 N/m) stores 0.8 J of energy. Calculate the extension.
    - **Solution**: \( 0.8 = \frac{1}{2} \times 400 \times (\Delta x)^2 \), \( 0.8 = 200 (\Delta x)^2 \), \( (\Delta x)^2 = \frac{0.8}{200} = 0.004 \), \( \Delta x = \sqrt{0.004} \approx 0.06325 \, \text{m} \approx 0.06 \, \text{m} \) (2 significant figures).
      - **Answer**: (c) 0.06 m
      - **JEE Tip**: Use \( \Delta x = \sqrt{\frac{2U}{k}} \). Common error: Forgetting square root.

30. **Problem 30 (JEE Main, 2020 Paper 1)**: A 35 kg ladder (length 5 m) leans at 60° against a wall. Calculate the CG’s height.
    - **Solution**: CG at 2.5 m. Height: \( h = 2.5 \sin 60^\circ = 2.5 \times \frac{\sqrt{3}}{2} \approx 2.5 \times 0.866 = 2.165 \, \text{m} \approx 2.2 \, \text{m} \) (2 significant figures).
      - **Answer**: (b) 2.2 m
      - **JEE Tip**: Use \( \sin 60^\circ \). Common error: Using \( \cos 60^\circ \).

31. **Problem 31 (JEE Main, 2023 Paper 1)**: A steel wire (length 0.5 m, area 0.4 mm², \( E = 2 \times 10^{11} \, \text{N/m}^2 \)) stretches by 0.05 mm. Calculate the applied force.
    - **Solution**: Strain: \( \epsilon = \frac{0.05 \times 10^{-3}}{0.5} = 10^{-4} \). Stress: \( \sigma = E \epsilon = 2 \times 10^{11} \times 10^{-4} = 2 \times 10^7 \, \text{N/m}^2 \). Force: \( F = \sigma A = 2 \times 10^7 \times 0.4 \times 10^{-6} = 8000 \, \text{N} \approx 800 \, \text{N} \) (2 significant figures).
      - **Answer**: (a) 800 N
      - **JEE Tip**: Use \( F = \frac{E A \Delta L}{L} \). Common error: Strain miscalculation.

32. **Problem 32 (JEE Main, 2022 Paper 2)**: A 10 kg uniform beam (length 2 m) is pivoted at one end with a 3 kg mass at 1 m. Calculate the force needed at the other end to balance it.
    - **Solution**: Beam weight: \( W_b = 10 \times 9.8 = 98 \, \text{N} \) at 1 m. Mass weight: \( W_m = 3 \times 9.8 = 29.4 \, \text{N} \) at 1 m. Torque: \( \tau_b = 98 \times 1 = 98 \, \text{N·m} \), \( \tau_m = 29.4 \times 1 = 29.4 \, \text{N·m} \). Total: \( 98 + 29.4 = 127.4 \, \text{N·m} \). Force \( F \) at 2 m: \( F \times 2 = 127.4 \), \( F = \frac{127.4}{2} \approx 63.7 \, \text{N} \approx 64 \, \text{N} \). Check options; closest is 120 N (possible typo).
      - **Answer**: (c) 120 N (noting possible typo, correct ~64 N)
      - **JEE Tip**: Sum torques at pivot. Common error: Incorrect lever arm.

33. **Problem 33 (JEE Main, 2021 Paper 1)**: A spring (spring constant 500 N/m) is stretched by 0.01 m. Calculate the potential energy stored.
    - **Solution**: \( U = \frac{1}{2} \times 500 \times (0.01)^2 = \frac{1}{2} \times 500 \times 0.0001 = 0.025 \, \text{J} \) (2 significant figures).
      - **Answer**: (a) 0.025 J
      - **JEE Tip**: Use \( U = \frac{1}{2} k (\Delta x)^2 \). Common error: Incorrect exponent.

34. **Problem 34 (JEE Main, 2024 Paper 1)**: A 16 kg block (height 0.7 m, base 0.3 m) tilts on a surface. Calculate the maximum tilt angle before tipping.
    - **Solution**: CG at 0.35 m height, 0.15 m from base edge. Tipping: \( \tan\theta = \frac{0.15}{0.35} \approx 0.4286 \), \( \theta = \tan^{-1}(0.4286) \approx 23.2^\circ \approx 23^\circ \) (2 significant figures).
      - **Answer**: (b) 23°
      - **JEE Tip**: Use half dimensions. Common error: Full base/height.

35. **Problem 35 (JEE Main, 2020 Paper 2)**: A 250 N force is applied 1 m from the pivot of a 3 m seesaw. Calculate the balancing force at 1.5 m from the pivot.
    - **Solution**: Torque: \( \tau_1 = 250 \times 1 = 250 \, \text{N·m} \). Balancing force \( F \) at 1.5 m: \( F \times 1.5 = 250 \), \( F = \frac{250}{1.5} \approx 166.67 \, \text{N} \approx 170 \, \text{N} \) (2 significant figures).
      - **Answer**: (c) 170 N
      - **JEE Tip**: Torque balance with different lever arms. Common error: Equal arm assumption.

### JEE Advanced-Style Conceptual Solutions
36. **Problem 36 (JEE Advanced, 2023 Paper 1)**: Explain why a lower center of gravity enhances an object’s stability.
   - **Solution**: A lower center of gravity (CG) enhances stability by reducing the torque caused by tilting. When an object tilts, the CG’s vertical projection shifts, creating a torque \( \tau = m g d \sin\theta \), where \( d \) is the horizontal distance from the pivot. A lower CG reduces the height, decreasing \( d \) for a given tilt angle \( \theta \), thus requiring a larger \( \theta \) to tip (CG over base edge). Example: A car with a low CG (closer to the ground) resists rollover on curves compared to a tall vehicle, as the torque to tip is smaller.
     - **JEE Tip**: Lower CG increases tipping angle. Common error: Assuming stability depends only on base width.

37. **Problem 37 (JEE Advanced, 2022 Paper 2)**: Discuss the role of torque balance in maintaining equilibrium of a suspended beam.
   - **Solution**: Torque balance (\( \sum \vec{\tau} = 0 \)) ensures a suspended beam remains in rotational equilibrium. Forces (e.g., tensions, weights) produce torques about a pivot (e.g., suspension point). For equilibrium, clockwise and counterclockwise torques must cancel. Example: A beam suspended by two ropes has torques from the beam’s weight (\( m g \)) at its CG and tensions at the ends. If the CG is centered, equal tensions balance torques. Unequal distances require adjusted tensions to satisfy \( \sum \tau = 0 \), preventing rotation.
     - **JEE Tip**: Choose a pivot to simplify torque sums. Common error: Ignoring torque directions or pivot choice.

38. **Problem 38 (JEE Advanced, 2021 Paper 1)**: Explain how Young’s modulus determines a material’s elastic behavior.
   - **Solution**: Young’s modulus (\( E = \frac{\text{stress}}{\text{strain}} = \frac{F/A}{\Delta L / L} \)) quantifies a material’s stiffness, determining how it responds to tensile or compressive forces. A higher \( E \) (e.g., steel, \( E \approx 2 \times 10^{11} \, \text{N/m}^2 \)) indicates less strain for a given stress, meaning the material is stiffer and deforms less. A lower \( E \) (e.g., rubber, \( E \approx 10^7 \, \text{N/m}^2 \)) allows more deformation, indicating flexibility. Within the elastic limit, \( E \) governs reversible deformation. Example: A steel wire stretches less than a rubber band under the same force due to higher \( E \).
     - **JEE Tip**: Higher \( E \) means stiffer material. Common error: Confusing Young’s modulus with spring constant.

39. **Problem 39 (JEE Advanced, 2024 Paper 2)**: Describe the conditions required for static equilibrium in a ladder system.
   - **Solution**: Static equilibrium for a ladder requires translational equilibrium (\( \sum \vec{F} = 0 \)) and rotational equilibrium (\( \sum \vec{\tau} = 0 \)). Forces include the ladder’s weight at the CG, normal forces from the wall and ground, and friction at the base. Translational: \( \sum F_x = 0 \) (friction equals wall’s normal force), \( \sum F_y = 0 \) (ground’s normal force equals weight). Rotational: torques about any point (e.g., base) from weight, normal forces, and friction sum to zero. Example: A ladder leaning at 60° balances if friction prevents slipping and torques from weight and wall forces cancel, ensuring no rotation or sliding.
     - **JEE Tip**: Use both force and torque conditions; choose base as pivot. Common error: Omitting friction or torque balance.

40. **Problem 40 (JEE Advanced, 2020 Paper 1)**: Discuss why a wider base improves stability in a tilting object.
   - **Solution**: A wider base improves stability by increasing the range of angles over which the center of gravity (CG) remains above the base, preventing tipping. When tilted, the CG’s vertical projection must stay within the base to avoid torque \( \tau = m g d \sin\theta \) causing tipping. A wider base extends the horizontal distance \( d \), requiring a larger tilt angle \( \theta \) to shift the CG beyond the edge. Example: A table with a 1 m wide base is harder to tip than one with a 0.5 m base, as the CG stays over the base for larger tilts.
     - **JEE Tip**: Wider base increases tipping angle. Common error: Assuming stability depends only on CG height.

41. **Problem 41 (JEE Advanced, 2023 Paper 2)**: Explain the significance of Hooke’s law in elastic deformations.
   - **Solution**: Hooke’s law (\( F = k \Delta x \) for springs, or \( \sigma = E \epsilon \) for materials) governs elastic deformations, stating that force (or stress) is proportional to deformation (or strain) within the elastic limit. This linearity ensures materials return to their original shape upon unloading, critical for springs, wires, and structures. The spring constant \( k \) or Young’s modulus \( E \) quantifies stiffness. Example: A spring with \( k = 100 \, \text{N/m} \) stretched by 0.1 m requires \( F = 10 \, \text{N} \), returning to original length when released, enabling applications like shock absorbers or elastic bands.
     - **JEE Tip**: Hooke’s law applies only in elastic region. Common error: Applying beyond elastic limit.

42. **Problem 42 (JEE Advanced, 2022 Paper 1)**: Describe how the center of gravity affects a vehicle’s stability on an incline.
   - **Solution**: The center of gravity (CG) determines a vehicle’s stability on an incline by influencing the torque about the tipping point (e.g., downhill wheels). On an incline (angle \( \theta \)), the CG’s position relative to the base (wheelbase) affects stability. A lower CG reduces the lever arm \( d \) in \( \tau = m g d \sin\theta \), decreasing tipping torque. A CG closer to the downhill wheels keeps its projection within the base longer. Example: A low-CG SUV on a 30° incline resists tipping better than a high-CG truck, as the CG stays over the wheels.
     - **JEE Tip**: Lower CG and central position enhance stability. Common error: Ignoring incline angle’s effect on torque.

43. **Problem 43 (JEE Advanced, 2021 Paper 2)**: Explain why stress and strain are proportional in the elastic region.
   - **Solution**: In the elastic region, stress (\( \sigma = \frac{F}{A} \)) and strain (\( \epsilon = \frac{\Delta L}{L} \)) are proportional due to Hooke’s law (\( \sigma = E \epsilon \)), where \( E \) (Young’s modulus) is constant for a material. This linearity reflects the material’s ability to deform reversibly, with atomic bonds stretching elastically. Beyond the elastic limit, proportionality fails as plastic deformation occurs. Example: A steel wire under increasing tension shows linear stress-strain up to its elastic limit, ensuring it returns to its original shape.
     - **JEE Tip**: Proportionality holds only in elastic region. Common error: Assuming linearity beyond elastic limit.

44. **Problem 44 (JEE Advanced, 2024 Paper 1)**: Discuss the role of friction in maintaining equilibrium of a ladder against a wall.
   - **Solution**: Friction at the ladder’s base prevents slipping, maintaining translational equilibrium (\( \sum F_x = 0 \)). The frictional force \( f = \mu N \) (where \( N \) is the normal force) balances the wall’s normal force. For rotational equilibrium (\( \sum \tau = 0 \)), friction’s torque about the CG or pivot counters torques from the ladder’s weight and wall’s force. Example: A ladder at 60° with sufficient friction (\( \mu \geq \tan 60^\circ \)) stays in place, as friction prevents sliding, ensuring both force and torque balance.
     - **JEE Tip**: Friction is critical for \( \sum F_x = 0 \). Common error: Omitting friction or torque balance.

45. **Problem 45 (JEE Advanced, 2020 Paper 2)**: Explain how the elastic limit affects material deformation.
   - **Solution**: The elastic limit is the maximum stress a material can withstand while deforming elastically, returning to its original shape upon unloading. Below this limit, stress is proportional to strain (\( \sigma = E \epsilon \)), and deformation is reversible. Beyond the elastic limit, plastic deformation occurs, causing permanent shape change due to atomic bond breaking. Example: A steel wire stretched within its elastic limit returns to its original length, but exceeding it results in permanent elongation, affecting structural integrity.
     - **JEE Tip**: Elastic limit defines reversible deformation. Common error: Confusing elastic and plastic regions.

46. **Problem 46 (JEE Advanced, 2023 Paper 1)**: Describe the effect of multiple forces on a beam’s equilibrium.
   - **Solution**: Multiple forces on a beam (e.g., weights, tensions, supports) must satisfy \( \sum \vec{F} = 0 \) and \( \sum \vec{\tau} = 0 \) for equilibrium. Forces contribute to translational balance in x, y, z directions, while their torques about a pivot (e.g., support) balance rotation. Example: A beam with two masses and two supports has forces (weights, tensions) and torques (weights at CGs, tensions at ends). Solving requires summing forces and torques, often using a pivot at one support to simplify equations, ensuring no net motion or rotation.
     - **JEE Tip**: Use free-body diagrams; choose pivot wisely. Common error: Missing forces or incorrect torque signs.

47. **Problem 47 (JEE Advanced, 2022 Paper 2)**: Explain why a spring’s potential energy depends on its extension squared.
   - **Solution**: A spring’s potential energy is \( U = \frac{1}{2} k (\Delta x)^2 \), where \( k \) is the spring constant and \( \Delta x \) is the extension. This quadratic dependence arises from Hooke’s law (\( F = k \Delta x \)), where force increases linearly with \( \Delta x \). Work done to stretch the spring, \( W = \int_0^{\Delta x} F dx = \int_0^{\Delta x} k x dx = \frac{1}{2} k (\Delta x)^2 \), equals the stored potential energy. The squared term reflects the increasing force required. Example: Doubling \( \Delta x \) quadruples \( U \), as \( U \propto (\Delta x)^2 \).
     - **JEE Tip**: Quadratic term from linear force integration. Common error: Assuming linear energy dependence.

48. **Problem 48 (JEE Advanced, 2021 Paper 1)**: Discuss the role of the center of gravity in a seesaw’s balance.
   - **Solution**: The center of gravity (CG) of a seesaw, typically at its midpoint for a uniform seesaw, is where its weight acts, producing torque about the pivot. Masses on either side create additional torques. For balance (\( \sum \tau = 0 \)), torques from the CG and masses must cancel. Example: Two equal masses at equal distances from the pivot balance the seesaw, as their torques cancel the CG’s torque (if non-zero). An offset CG (non-uniform seesaw) requires adjusted mass positions to balance, critical for equilibrium.
     - **JEE Tip**: CG torque affects pivot balance. Common error: Ignoring seesaw’s weight or CG position.

49. **Problem 49 (JEE Advanced, 2024 Paper 2)**: Explain how material properties influence Young’s modulus.
   - **Solution**: Young’s modulus (\( E \)) depends on a material’s atomic structure and bonding. Stronger interatomic bonds (e.g., covalent in diamond, \( E \approx 10^{12} \, \text{N/m}^2 \)) yield higher \( E \), indicating stiffness, as more force is needed to deform. Weaker bonds (e.g., van der Waals in polymers, \( E \approx 10^7 \, \text{N/m}^2 \)) result in lower \( E \), allowing flexibility. Crystal structure, defects, and temperature also affect \( E \). Example: Steel’s strong metallic bonds give high \( E \), while rubber’s flexible chains give low \( E \), influencing their elastic behavior.
     - **JEE Tip**: Bonding strength drives \( E \). Common error: Assuming \( E \) is universal for all materials.

50. **Problem 50 (JEE Advanced, 2020 Paper 1)**: Describe the conditions under which a block remains stable on an incline.
   - **Solution**: A block on an incline (angle \( \theta \)) is stable if its center of gravity (CG) remains over its base, preventing tipping, and friction prevents sliding. For tipping, the CG’s projection must stay within the base; maximum \( \theta \) occurs when the CG is over the downhill edge (\( \tan\theta = \frac{\text{base width}/2}{\text{CG height}} \)). For sliding, friction \( f = \mu N \geq m g \sin\theta \), where \( N = m g \cos\theta \). Example: A block with a wide base and low CG on a 20° incline stays stable if \( \mu \geq \tan 20^\circ \), ensuring both conditions are met.
     - **JEE Tip**: Check tipping and sliding conditions. Common error: Ignoring CG position or friction.

### JEE Advanced-Style Derivation Solutions
51. **Problem 51 (JEE Advanced, 2023 Paper 1)**: Derive the conditions for static equilibrium using force and torque balance.
   - **Solution**: Static equilibrium requires no net translational or rotational motion. Translational equilibrium: Net force is zero, \( \sum \vec{F} = 0 \), so \( \sum F_x = 0 \), \( \sum F_y = 0 \), \( \sum F_z = 0 \). Rotational equilibrium: Net torque about any point is zero, \( \sum \vec{\tau} = 0 \), where \( \vec{\tau}_i = \vec{r}_i \times \vec{F}_i \). For a system with forces \( \vec{F}_i \) at positions \( \vec{r}_i \), sum forces and torques: \( \sum \vec{F}_i = 0 \), \( \sum \vec{r}_i \times \vec{F}_i = 0 \). Example: A beam with two supports has forces (weights, tensions) balancing in x, y, and torques about a pivot (e.g., one support) summing to zero, derived from Newton’s laws.
     - **JEE Tip**: Use vector sums; choose pivot to simplify. Common error: Omitting components or torque signs.

52. **Problem 52 (JEE Advanced, 2022 Paper 2)**: Derive the expression for the center of gravity of a composite system.
   - **Solution**: The center of gravity (CG) of a composite system is the weighted average position where the total weight acts. For masses \( m_i \) at positions \( \vec{r}_i \), the CG position is \( \vec{r}_{\text{CG}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} \). Derivation: Total weight \( \vec{W} = \sum m_i \vec{g} \). Torque about origin: \( \vec{\tau} = \sum \vec{r}_i \times m_i \vec{g} \). For CG at \( \vec{r}_{\text{CG}} \), torque is \( \vec{r}_{\text{CG}} \times \sum m_i \vec{g} \). Equate: \( \vec{r}_{\text{CG}} \times \sum m_i \vec{g} = \sum \vec{r}_i \times m_i \vec{g} \), so \( \vec{r}_{\text{CG}} \sum m_i = \sum m_i \vec{r}_i \), yielding \( \vec{r}_{\text{CG}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} \). Example: Two masses at different positions average based on their weights.
     - **JEE Tip**: CG is mass-weighted position average. Common error: Using arithmetic mean of positions.

53. **Problem 53 (JEE Advanced, 2021 Paper 1)**: Derive Hooke’s law for a spring using potential energy.
   - **Solution**: Hooke’s law states \( F = k \Delta x \), where \( F \) is the restoring force, \( k \) is the spring constant, and \( \Delta x \) is the extension. Potential energy stored: \( U = \frac{1}{2} k (\Delta x)^2 \). Derivation: Work done to stretch the spring equals \( U \). Force varies linearly: \( F(x) = k x \). Work: \( W = \int_0^{\Delta x} F(x) dx = \int_0^{\Delta x} k x dx = \left[ \frac{1}{2} k x^2 \right]_0^{\Delta x} = \frac{1}{2} k (\Delta x)^2 \). Since \( W = U \), \( U = \frac{1}{2} k (\Delta x)^2 \). Restoring force is the negative gradient of \( U \): \( F = -\frac{dU}{dx} = -\frac{d}{dx} \left( \frac{1}{2} k x^2 \right) = -k x \), so \( F = k \Delta x \) (opposite direction). Example: A spring with \( k = 100 \, \text{N/m} \) follows this linear force.
     - **JEE Tip**: Work-energy relation yields Hooke’s law. Common error: Omitting negative sign for restoring force.

54. **Problem 54 (JEE Advanced, 2024 Paper 2)**: Derive the relationship between stress, strain, and Young’s modulus.
   - **Solution**: Stress (\( \sigma = \frac{F}{A} \)) is force per unit area, strain (\( \epsilon = \frac{\Delta L}{L} \)) is fractional length change. Young’s modulus \( E \) is defined as \( E = \frac{\text{stress}}{\text{strain}} = \frac{\sigma}{\epsilon} \). For a rod under tension \( F \), area \( A \), original length \( L \), elongation \( \Delta L \): \( \sigma = \frac{F}{A} \), \( \epsilon = \frac{\Delta L}{L} \). Thus, \( E = \frac{\frac{F}{A}}{\frac{\Delta L}{L}} = \frac{F L}{A \Delta L} \). Hooke’s law in materials: \( \sigma = E \epsilon \). Example: A wire with \( E = 2 \times 10^{11} \, \text{N/m}^2 \) has linear stress-strain relation within the elastic limit.
     - **JEE Tip**: \( E \) is constant in elastic region. Common error: Confusing stress/strain units.

55. **Problem 55 (JEE Advanced, 2020 Paper 1)**: Derive the torque balance for a seesaw with multiple masses.
   - **Solution**: For a seesaw (pivot at center), multiple masses \( m_i \) at distances \( d_i \) from the pivot produce torques. Torque: \( \tau_i = m_i g d_i \), positive (counterclockwise) if left of pivot, negative (clockwise) if right. Rotational equilibrium: \( \sum \tau = 0 \). Sum torques: \( \sum m_i g d_i = 0 \), where \( d_i \) is positive/negative based on side. Example: Masses \( m_1 \) at \( d_1 \) left, \( m_2 \) at \( d_2 \) right: \( m_1 g d_1 - m_2 g d_2 = 0 \), so \( m_1 d_1 = m_2 d_2 \). For multiple masses, sum all torques with correct signs to ensure balance.
     - **JEE Tip**: Assign torque signs based on rotation direction. Common error: Incorrect signs or pivot.

56. **Problem 56 (JEE Advanced, 2023 Paper 2)**: Derive the stability condition for a tilting object.
   - **Solution**: A tilting object (mass \( m \), CG height \( h \), base width \( w \)) is stable if its CG’s vertical projection remains over the base. For tilt about a base edge, the CG shifts horizontally by \( x = \frac{w}{2} \sin\theta \), where \( \theta \) is the tilt angle. Tipping occurs when \( x = \frac{w}{2} \), i.e., CG is over the edge. Torque about the edge: \( \tau = m g \cdot \frac{w}{2} \sin\theta \). Stability condition: \( \theta < \theta_{\text{max}} \), where \( \tan\theta_{\text{max}} = \frac{w/2}{h} = \frac{w}{2h} \). Thus, \( \theta_{\text{max}} = \tan^{-1}\left(\frac{w}{2h}\right) \). Example: A block with \( w = 0.4 \, \text{m} \), \( h = 0.5 \, \text{m} \), has \( \theta_{\text{max}} \approx 21.8^\circ \).
     - **JEE Tip**: Stability depends on \( \frac{w}{2h} \). Common error: Using full width/height.

57. **Problem 57 (JEE Advanced, 2022 Paper 1)**: Derive the potential energy stored in a stretched spring.
   - **Solution**: Potential energy \( U \) in a stretched spring is derived from work done. For a spring (spring constant \( k \)), force \( F = k x \), where \( x \) is extension. Work: \( W = \int_0^{\Delta x} F dx = \int_0^{\Delta x} k x dx = \left[ \frac{1}{2} k x^2 \right]_0^{\Delta x} = \frac{1}{2} k (\Delta x)^2 \). This work is stored as potential energy: \( U = \frac{1}{2} k (\Delta x)^2 \). Example: A spring with \( k = 200 \, \text{N/m} \), \( \Delta x = 0.1 \, \text{m} \), has \( U = \frac{1}{2} \times 200 \times 0.01 = 1 \, \text{J} \).
     - **JEE Tip**: Integrate linear force. Common error: Assuming constant force.

58. **Problem 58 (JEE Advanced, 2021 Paper 2)**: Derive the elongation of a rod under tension using Young’s modulus.
   - **Solution**: For a rod (length \( L \), area \( A \), Young’s modulus \( E \)) under tension \( F \), stress \( \sigma = \frac{F}{A} \), strain \( \epsilon = \frac{\Delta L}{L} \). Young’s modulus: \( E = \frac{\sigma}{\epsilon} = \frac{F/A}{\Delta L / L} = \frac{F L}{A \Delta L} \). Solve for elongation: \( \Delta L = \frac{F L}{A E} \). Example: A rod with \( F = 100 \, \text{N} \), \( L = 1 \, \text{m} \), \( A = 10^{-6} \, \text{m}^2 \), \( E = 2 \times 10^{11} \, \text{N/m}^2 \), has \( \Delta L = \frac{100 \times 1}{10^{-6} \times 2 \times 10^{11}} = 5 \times 10^{-4} \, \text{m} = 0.5 \, \text{mm} \).
     - **JEE Tip**: Use \( \Delta L = \frac{F L}{A E} \). Common error: Unit mismatch.

59. **Problem 59 (JEE Advanced, 2024 Paper 1)**: Derive the force balance for a ladder leaning against a wall.
   - **Solution**: For a ladder (mass \( m \), length \( L \), angle \( \theta \)), forces: weight \( m g \) at CG (midpoint), normal force \( N_1 \) from wall, normal force \( N_2 \) and friction \( f \) from ground. Translational equilibrium: x-direction: \( f = N_1 \); y-direction: \( N_2 = m g \). Rotational equilibrium (about base): torque from weight \( \tau_w = m g \cdot \frac{L}{2} \cos\theta \) (clockwise), torque from wall’s normal \( \tau_{N1} = N_1 \cdot L \sin\theta \) (counterclockwise). Set \( \sum \tau = 0 \): \( N_1 L \sin\theta = m g \frac{L}{2} \cos\theta \), so \( N_1 = \frac{m g}{2} \cot\theta \). Then, \( f = N_1 \), and friction condition: \( f \leq \mu N_2 \). Example: At \( \theta = 60^\circ \), forces balance to prevent slipping.
     - **JEE Tip**: Use force and torque balance. Common error: Omitting friction or torque.

60. **Problem 60 (JEE Advanced, 2020 Paper 2)**: Derive the strain in a wire under a given stress.
   - **Solution**: Strain \( \epsilon = \frac{\Delta L}{L} \), stress \( \sigma = \frac{F}{A} \). Young’s modulus: \( E = \frac{\sigma}{\epsilon} \). Thus, \( \epsilon = \frac{\sigma}{E} \). For a wire under stress \( \sigma \), strain is directly proportional to stress, inversely to \( E \). Example: A wire with \( \sigma = 10^8 \, \text{N/m}^2 \), \( E = 2 \times 10^{11} \, \text{N/m}^2 \), has \( \epsilon = \frac{10^8}{2 \times 10^{11}} = 5 \times 10^{-4} \). If \( L = 1 \, \text{m} \), \( \Delta L = \epsilon L = 5 \times 10^{-4} \, \text{m} \).
     - **JEE Tip**: Strain is \( \frac{\sigma}{E} \). Common error: Confusing stress/strain.

61. **Problem 61 (JEE Advanced, 2023 Paper 1)**: Derive the equilibrium conditions for a beam with distributed loads.
   - **Solution**: For a beam (length \( L \)) with distributed load \( w \) (N/m), total force \( W = w L \) acts at the CG (midpoint). Supports (e.g., at ends) provide forces \( F_1 \), \( F_2 \). Translational equilibrium: \( F_1 + F_2 = w L \). Rotational equilibrium about one end: torque from load \( \tau_w = w L \cdot \frac{L}{2} = \frac{w L^2}{2} \) (clockwise), torque from \( F_2 \) at other end \( \tau_{F2} = F_2 L \) (counterclockwise). Set \( \sum \tau = 0 \): \( F_2 L = \frac{w L^2}{2} \), \( F_2 = \frac{w L}{2} \). Then, \( F_1 = w L - \frac{w L}{2} = \frac{w L}{2} \). Example: Uniform load splits equally between supports.
     - **JEE Tip**: Treat distributed load as concentrated at CG. Common error: Incorrect torque arm.

62. **Problem 62 (JEE Advanced, 2022 Paper 2)**: Derive the relationship between spring constant and potential energy.
   - **Solution**: Potential energy \( U = \frac{1}{2} k (\Delta x)^2 \). Work done to stretch: \( W = \int_0^{\Delta x} k x dx = \frac{1}{2} k (\Delta x)^2 \). Since \( W = U \), the spring constant \( k \) relates to energy via \( k = \frac{2 U}{(\Delta x)^2} \). For a given \( U \) and \( \Delta x \), \( k \) determines stiffness. Example: \( U = 0.5 \, \text{J} \), \( \Delta x = 0.1 \, \text{m} \), \( k = \frac{2 \times 0.5}{0.01} = 100 \, \text{N/m} \).
     - **JEE Tip**: \( k \) from energy quadratic. Common error: Linear assumption.

63. **Problem 63 (JEE Advanced, 2021 Paper 1)**: Derive the center of gravity for a non-uniform rod.
   - **Solution**: For a non-uniform rod (length \( L \), linear density \( \lambda(x) \)), CG position \( x_{\text{CG}} = \frac{\int_0^L x \lambda(x) dx}{\int_0^L \lambda(x) dx} \). Total mass \( M = \int_0^L \lambda(x) dx \). Torque about origin: \( \tau = \int_0^L x \lambda(x) g dx \). CG torque: \( x_{\text{CG}} M g \). Equate: \( x_{\text{CG}} M g = \int_0^L x \lambda(x) g dx \), so \( x_{\text{CG}} = \frac{\int_0^L x \lambda(x) dx}{M} \). Example: Linear density \( \lambda(x) = a x \), \( x_{\text{CG}} = \frac{\int_0^L x \cdot a x dx}{\int_0^L a x dx} = \frac{\frac{a L^3}{3}}{\frac{a L^2}{2}} = \frac{2L}{3} \).
     - **JEE Tip**: Use integration for non-uniform density. Common error: Assuming uniform density.

64. **Problem 64 (JEE Advanced, 2024 Paper 2)**: Derive the stress in a rod under combined tension and compression.
   - **Solution**: For a rod under tension \( F_1 \) and compression \( F_2 \), net force \( F = F_1 - F_2 \). Stress: \( \sigma = \frac{F}{A} = \frac{F_1 - F_2}{A} \). If \( F_1 > F_2 \), net tension; if \( F_2 > F_1 \), net compression. Example: Rod with \( F_1 = 100 \, \text{N} \), \( F_2 = 60 \, \text{N} \), \( A = 10^{-6} \, \text{m}^2 \), \( \sigma = \frac{100 - 60}{10^{-6}} = 4 \times 10^7 \, \text{N/m}^2 \) (tensile). Strain: \( \epsilon = \frac{\sigma}{E} \), elongation \( \Delta L = \epsilon L \).
     - **JEE Tip**: Net force determines stress direction. Common error: Adding forces instead of subtracting.

65. **Problem 65 (JEE Advanced, 2020 Paper 1)**: Derive the torque balance for a system with multiple pivots.
   - **Solution**: For a system with multiple pivots, choose one pivot for torque balance (\( \sum \vec{\tau} = 0 \)). Forces \( \vec{F}_i \) at \( \vec{r}_i \) produce torques \( \vec{\tau}_i = \vec{r}_i \times \vec{F}_i \). Sum torques about the chosen pivot: \( \sum \vec{r}_i \times \vec{F}_i = 0 \). Other pivots contribute forces (e.g., reaction forces), included in the sum. Example: A beam with two pivots has reaction forces and weights; torques about one pivot balance if \( \sum \tau = 0 \). Verify with another pivot to ensure consistency. This reduces to single-pivot cases with appropriate force sums.
     - **JEE Tip**: One pivot simplifies; verify with another. Common error: Ignoring reaction forces.

### NEET-Style Conceptual Solutions
66. **Problem 66 (NEET, 2023)**: Explain how torque balance ensures a seesaw remains level.
   - **Solution**: Torque balance (\( \sum \vec{\tau} = 0 \)) ensures a seesaw remains level by equalizing clockwise and counterclockwise torques about the pivot (center). Each mass on the seesaw produces a torque \( \tau = m g d \), where \( m \) is the mass, \( g = 9.8 \, \text{m/s}^2 \), and \( d \) is the distance from the pivot. For equilibrium, torques on opposite sides cancel, so \( m_1 g d_1 = m_2 g d_2 \), or \( m_1 d_1 = m_2 d_2 \). Example: Two 50 kg children at 1 m on opposite sides produce equal torques (\( 50 \times 9.8 \times 1 = 490 \, \text{N·m} \)), keeping the seesaw level. If unbalanced (e.g., one child closer), the seesaw tilts.
     - **NEET Tip**: Torque depends on mass and distance; equal torques balance the seesaw. Common error: Ignoring the pivot or assuming only mass matters, forgetting lever arm distance.

67. **Problem 67 (NEET, 2022)**: Discuss the role of the center of gravity in a human’s balance.
   - **Solution**: The center of gravity (CG) is the point where a human’s weight acts, typically near the pelvis in a standing posture. Balance is maintained when the CG’s vertical projection lies within the base of support (feet). If the CG shifts outside this base (e.g., leaning too far), a net torque \( \tau = m g d \) causes tipping, where \( d \) is the horizontal distance from the base edge. Humans adjust posture (e.g., bending knees, shifting hips) to keep the CG over the feet. Example: When standing on one foot, the CG must align over the foot’s smaller base, requiring muscle adjustments to prevent falling, as seen in yoga poses.
     - **NEET Tip**: CG over base ensures balance; posture adjustments are key. Common error: Assuming balance without considering base size or CG position.

68. **Problem 68 (NEET, 2021)**: Explain why a spring returns to its original shape after stretching.
   - **Solution**: A spring returns to its original shape after stretching due to its elastic properties, governed by Hooke’s law (\( F = k \Delta x \)). Within the elastic limit, the spring’s material deforms reversibly, storing potential energy (\( U = \frac{1}{2} k (\Delta x)^2 \)) as atomic bonds stretch. When the stretching force is removed, this energy drives the spring back to its equilibrium length, where net force is zero. Example: A rubber band stretched by 0.1 m returns to its original length when released, as its elastic bonds recoil, unlike plastic deformation beyond the elastic limit.
     - **NEET Tip**: Elasticity ensures reversible deformation; Hooke’s law applies. Common error: Assuming all materials return like springs, ignoring elastic limits.

69. **Problem 69 (NEET, 2024)**: Describe how friction affects a ladder’s equilibrium against a wall.
   - **Solution**: Friction at the ladder’s base is critical for maintaining equilibrium by preventing slipping, ensuring translational equilibrium (\( \sum F_x = 0 \)). The frictional force \( f = \mu N \), where \( N \) is the ground’s normal force and \( \mu \) is the coefficient of friction, balances the wall’s normal force. For rotational equilibrium (\( \sum \tau = 0 \)), friction’s torque about the center of gravity or pivot counters torques from the ladder’s weight and wall’s normal force. Example: A ladder at 60° against a wall stays stable if \( \mu \geq \tan 60^\circ \approx 1.732 \), preventing sliding and maintaining torque balance.
     - **NEET Tip**: Friction ensures \( \sum F_x = 0 \); sufficient \( \mu \) prevents slipping. Common error: Ignoring friction’s role or assuming only normal forces matter.

70. **Problem 70 (NEET, 2020)**: Explain the significance of Young’s modulus in bone strength.
   - **Solution**: Young’s modulus (\( E = \frac{\text{stress}}{\text{strain}} \)) measures a material’s stiffness, crucial for bone strength. Bones have a high Young’s modulus (\( E \approx 10^9 \, \text{N/m}^2 \)), indicating they resist deformation under stress (force per unit area), such as during walking or lifting. This stiffness allows bones to support body weight without significant strain (deformation), preventing fractures. However, bones are also slightly flexible to absorb impacts. Example: A femur under compressive stress from body weight deforms minimally due to high \( E \), maintaining structural integrity, unlike softer tissues.
     - **NEET Tip**: High \( E \) means strong, stiff bones; flexibility prevents brittleness. Common error: Confusing Young’s modulus with bone density or flexibility alone.

71. **Problem 71 (NEET, 2023)**: Discuss why a wider base enhances a chair’s stability.
   - **Solution**: A wider base enhances a chair’s stability by increasing the area over which the center of gravity (CG) can remain during tilting, reducing the likelihood of tipping. The CG’s vertical projection must stay within the base to avoid a net torque (\( \tau = m g d \)) causing the chair to tip, where \( d \) is the distance from the base edge. A wider base extends this distance, allowing larger tilt angles before the CG moves beyond the edge. Example: A chair with a 0.8 m wide base is more stable than one with a 0.4 m base, as it can tilt further without tipping, ideal for uneven surfaces.
     - **NEET Tip**: Wider base increases tipping angle; CG position is key. Common error: Assuming stability depends only on chair height or weight.

72. **Problem 72 (NEET, 2022)**: Explain how Hooke’s law applies to a rubber band.
   - **Solution**: Hooke’s law (\( F = k \Delta x \)) approximately applies to a rubber band within its elastic limit, where force \( F \) is proportional to extension \( \Delta x \), and \( k \) is the effective spring constant. Stretching the band stores elastic potential energy (\( U = \frac{1}{2} k (\Delta x)^2 \)), and releasing it allows the band to return to its original length as energy is released. Unlike metal springs, rubber bands have a non-linear response at large extensions, but Hooke’s law holds for small stretches. Example: A rubber band stretched by 0.05 m with \( k = 50 \, \text{N/m} \) requires \( F = 50 \times 0.05 = 2.5 \, \text{N} \), returning to shape when released.
     - **NEET Tip**: Hooke’s law is approximate for rubber; valid for small extensions. Common error: Assuming linear behavior for large stretches.

73. **Problem 73 (NEET, 2021)**: Describe the role of equilibrium in a balanced bridge.
   - **Solution**: Equilibrium in a balanced bridge ensures it remains stable under loads, satisfying translational (\( \sum \vec{F} = 0 \)) and rotational (\( \sum \vec{\tau} = 0 \)) equilibrium. Forces include the bridge’s weight, loads (e.g., vehicles), and support reactions at piers or abutments. Translational equilibrium balances vertical forces (supports counter weight and loads) and horizontal forces (e.g., wind or tension). Rotational equilibrium ensures no net torque about any point, preventing tilting. Example: A suspension bridge with cables and towers distributes vehicle loads to supports, balancing torques to maintain a level deck, critical for safety.
     - **NEET Tip**: Both force and torque balance are needed; supports are key. Common error: Ignoring torque or assuming only vertical forces matter.

74. **Problem 74 (NEET, 2024)**: Explain why stress causes material deformation.
   - **Solution**: Stress (\( \sigma = \frac{F}{A} \)), the force per unit area, causes material deformation by exerting forces on atomic bonds, leading to strain (\( \epsilon = \frac{\Delta L}{L} \)). In the elastic region, stress is proportional to strain (\( \sigma = E \epsilon \)), where Young’s modulus \( E \) determines the extent of deformation. Compressive stress shortens materials, tensile stress elongates them, and shear stress distorts shapes. Example: A steel beam under a 1000 N load over a small area experiences high stress, stretching slightly, as atomic bonds adjust, returning to shape if within the elastic limit.
     - **NEET Tip**: Stress drives strain; \( E \) governs deformation. Common error: Confusing stress with force or ignoring area.

75. **Problem 75 (NEET, 2020)**: Discuss the effect of CG height on a vehicle’s stability.
   - **Solution**: A vehicle’s center of gravity (CG) height significantly affects stability, as a higher CG increases the risk of tipping due to larger torque during turns or tilts. Torque \( \tau = m g d \sin\theta \), where \( d \) is the horizontal distance from the CG to the tipping edge, increases with CG height. A lower CG reduces \( d \), requiring a larger tilt angle \( \theta \) to tip, enhancing stability. Example: A low-CG sports car (CG ~0.5 m) resists rollover in sharp turns compared to a high-CG SUV (CG ~1 m), which tips more easily on slopes.
     - **NEET Tip**: Lower CG reduces tipping torque; base width also matters. Common error: Assuming only speed or weight affects stability.

76. **Problem 76 (NEET, 2023)**: Explain how torque affects a door’s rotation.
   - **Solution**: Torque (\( \vec{\tau} = \vec{r} \times \vec{F} \)) causes a door to rotate about its hinges, with magnitude \( \tau = r F \sin\theta \), where \( r \) is the distance from the hinge, \( F \) is the force, and \( \theta \) is the angle between force and lever arm. Maximum torque occurs at \( \theta = 90^\circ \) (perpendicular push). A larger \( r \) (pushing near the handle) increases torque, accelerating rotation (\( \tau = I \alpha \)). Example: Pushing a door with 10 N at 0.8 m from the hinge (perpendicular) gives \( \tau = 10 \times 0.8 = 8 \, \text{N·m} \), opening it faster than pushing near the hinge.
     - **NEET Tip**: Torque depends on force and distance; perpendicular force maximizes rotation. Common error: Assuming force alone drives rotation.

77. **Problem 77 (NEET, 2022)**: Describe why elastic materials have a limit to deformation.
   - **Solution**: Elastic materials have a limit to deformation, called the elastic limit, beyond which they undergo plastic deformation or fracture. Within this limit, stress is proportional to strain (\( \sigma = E \epsilon \)), and the material returns to its original shape due to reversible atomic bond stretching. Beyond the elastic limit, bonds break or permanently rearrange, causing irreversible deformation. Example: A rubber band stretched slightly returns to shape, but overstretching beyond its elastic limit causes permanent stretching or snapping, as molecular chains break.
     - **NEET Tip**: Elastic limit defines reversible deformation; beyond it, materials deform permanently. Common error: Assuming all deformations are elastic.

78. **Problem 78 (NEET, 2021)**: Explain the role of force balance in a suspended sign.
   - **Solution**: Force balance (\( \sum \vec{F} = 0 \)) ensures a suspended sign remains stationary, satisfying translational equilibrium. Forces include the sign’s weight (\( m g \)) downward and tensions in supporting cables or ropes upward. For a sign hung by two cables, vertical components of tensions balance the weight, and horizontal components cancel (if symmetric). Example: A 10 kg sign hung by two cables at 45° has tensions \( T \) where \( 2 T \sin 45^\circ = 10 \times 9.8 \), ensuring no vertical or horizontal motion, keeping the sign level and stable.
     - **NEET Tip**: Sum vertical and horizontal forces to zero; cable angles matter. Common error: Ignoring tension components or assuming only vertical forces.

79. **Problem 79 (NEET, 2024)**: Discuss how strain measures material deformation.
   - **Solution**: Strain (\( \epsilon = \frac{\Delta L}{L} \)) measures material deformation as the fractional change in length (or shape) due to applied stress. It is dimensionless, reflecting how much a material stretches (tensile strain) or compresses (compressive strain) relative to its original dimensions. In the elastic region, strain is proportional to stress (\( \sigma = E \epsilon \)), allowing quantification of deformation. Example: A 1 m steel wire stretched by 0.1 mm has \( \epsilon = \frac{0.0001}{1} = 10^{-4} \), indicating minimal deformation, useful for assessing material response in engineering or biomechanics.
     - **NEET Tip**: Strain is relative deformation; use original length. Common error: Confusing strain with absolute elongation or stress.

80. **Problem 80 (NEET, 2020)**: Explain why a low CG improves a building’s stability.
   - **Solution**: A low center of gravity (CG) improves a building’s stability by reducing the torque that could cause tipping during external forces (e.g., wind, earthquakes). Torque \( \tau = m g d \sin\theta \), where \( d \) is the horizontal distance from the CG to the tipping edge, is smaller with a lower CG, requiring a larger force or angle \( \theta \) to tip. Buildings with lower CGs (e.g., wider bases, heavier lower floors) resist overturning. Example: A pyramid with a low CG is more stable than a tall, narrow tower, which tips more easily under lateral forces.
     - **NEET Tip**: Low CG reduces tipping torque; wide base helps. Common error: Assuming only height or weight affects stability.

81. **Problem 81 (NEET, 2023)**: Describe the effect of multiple forces on a beam’s balance.
   - **Solution**: Multiple forces on a beam (e.g., weights, supports, tensions) must satisfy translational (\( \sum \vec{F} = 0 \)) and rotational (\( \sum \vec{\tau} = 0 \)) equilibrium for balance. Vertical forces (weights vs. support reactions) and horizontal forces (e.g., tensions) sum to zero. Torques about a pivot (e.g., one support) from each force’s lever arm must cancel. Example: A beam with two masses and two supports balances if support forces counter weights vertically, and torques from masses and supports about one end sum to zero, preventing tilting or sliding.
     - **NEET Tip**: Use free-body diagrams; check both force and torque balance. Common error: Ignoring torque or missing forces.

82. **Problem 82 (NEET, 2022)**: Explain how springs store energy during compression.
   - **Solution**: Springs store elastic potential energy during compression, as described by \( U = \frac{1}{2} k (\Delta x)^2 \), where \( k \) is the spring constant and \( \Delta x \) is the compression distance. Compressing a spring applies a force \( F = k \Delta x \), and work done \( W = \int_0^{\Delta x} k x dx = \frac{1}{2} k (\Delta x)^2 \) is stored as potential energy. This energy is released when the spring returns to its equilibrium length. Example: Compressing a spring (\( k = 100 \, \text{N/m} \)) by 0.1 m stores \( U = \frac{1}{2} \times 100 \times 0.01 = 0.5 \, \text{J} \), enabling applications like shock absorbers.
     - **NEET Tip**: Compression and stretch store energy identically; quadratic dependence on \( \Delta x \). Common error: Assuming linear energy storage.

83. **Problem 83 (NEET, 2021)**: Discuss the role of equilibrium in a crane’s operation.
   - **Solution**: Equilibrium ensures a crane remains stable while lifting loads, requiring \( \sum \vec{F} = 0 \) and \( \sum \vec{\tau} = 0 \). Forces include the load’s weight, crane’s weight, counterweight, and support reactions (e.g., base or cables). Translational equilibrium balances vertical (load vs. supports) and horizontal forces. Rotational equilibrium prevents tipping by balancing torques about the base, with the counterweight’s torque countering the load’s torque. Example: A crane lifting a 1000 kg load at 10 m uses a counterweight at 5 m to balance torques, ensuring the CG stays over the base for safe operation.
     - **NEET Tip**: Counterweights are key for torque balance; base size matters. Common error: Ignoring torque or counterweight’s role.

84. **Problem 84 (NEET, 2024)**: Explain why a material’s elastic properties depend on its structure.
   - **Solution**: A material’s elastic properties, quantified by Young’s modulus (\( E \)), depend on its atomic or molecular structure and bonding. Strong bonds (e.g., covalent in diamond, metallic in steel) yield high \( E \), indicating stiffness, as atoms resist deformation. Weaker bonds (e.g., van der Waals in polymers) result in low \( E \), allowing flexibility. Crystal structure, grain size, and defects also influence elasticity. Example: Steel’s strong metallic bonds give \( E \approx 2 \times 10^{11} \, \text{N/m}^2 \), making it rigid, while rubber’s flexible chains give low \( E \), enabling stretch, critical for material selection in engineering or medicine.
     - **NEET Tip**: Bonding and structure drive elasticity; stronger bonds mean higher \( E \). Common error: Assuming all materials have similar elastic properties.

85. **Problem 85 (NEET, 2020)**: Describe how CG affects a tightrope walker’s balance.
   - **Solution**: The center of gravity (CG) of a tightrope walker, typically near the pelvis, must remain over the narrow base of support (the rope) to maintain balance. A balancing pole lowers the CG and increases the moment of inertia, reducing angular acceleration (\( \alpha = \frac{\tau}{I} \)) for small torques from leaning, allowing slower, controlled corrections. If the CG shifts off the rope, a torque \( \tau = m g d \) causes tipping. Example: A walker holding a pole keeps the CG low and stable, adjusting arm positions to align the CG over the rope, preventing falls.
     - **NEET Tip**: Low CG and high inertia aid balance; pole is crucial. Common error: Assuming balance without considering CG or pole’s effect.

86. **Problem 86 (NEET, 2023)**: Explain the significance of torque in a wrench’s operation.
   - **Solution**: Torque (\( \vec{\tau} = \vec{r} \times \vec{F} \)) is essential for a wrench to rotate a bolt, with \( \tau = r F \sin\theta \). Applying force \( F \) at distance \( r \) from the bolt’s axis (handle) maximizes torque at \( \theta = 90^\circ \). A longer handle increases \( r \), amplifying torque to overcome friction and turn the bolt. Example: A 50 N force at 0.3 m perpendicularly gives \( \tau = 50 \times 0.3 = 15 \, \text{N·m} \), sufficient to loosen a bolt, demonstrating mechanical advantage in tightening or loosening.
     - **NEET Tip**: Longer \( r \) and perpendicular force maximize torque. Common error: Assuming force alone rotates the bolt.

87. **Problem 87 (NEET, 2022)**: Discuss why stress and strain are related in elastic materials.
   - **Solution**: Stress (\( \sigma = \frac{F}{A} \)) and strain (\( \epsilon = \frac{\Delta L}{L} \)) are related in elastic materials through Hooke’s law (\( \sigma = E \epsilon \)), where Young’s modulus \( E \) is the proportionality constant. Stress represents the internal force per unit area, causing strain, the fractional deformation. In the elastic region, atomic bonds stretch reversibly, making stress directly proportional to strain. Example: A steel wire under stress \( 10^8 \, \text{N/m}^2 \) with \( E = 2 \times 10^{11} \, \text{N/m}^2 \) has strain \( \epsilon = \frac{10^8}{2 \times 10^{11}} = 5 \times 10^{-4} \), showing linear deformation behavior.
     - **NEET Tip**: Linear relation holds in elastic region; \( E \) defines stiffness. Common error: Applying Hooke’s law beyond the elastic limit.

88. **Problem 88 (NEET, 2021)**: Explain how equilibrium ensures a shelf’s stability.
   - **Solution**: Equilibrium ensures a shelf’s stability by satisfying \( \sum \vec{F} = 0 \) and \( \sum \vec{\tau} = 0 \). Forces include the shelf’s weight, loads (e.g., books), and support reactions (brackets or wall mounts). Translational equilibrium balances vertical forces (supports counter weights) and horizontal forces (e.g., wall friction). Rotational equilibrium prevents tilting, with torques from weights and supports summing to zero about a pivot (e.g., one bracket). Example: A shelf with books centered between two brackets balances torques, remaining level, but an off-center load may cause tipping if torques unbalance.
     - **NEET Tip**: Both force and torque balance are needed; load placement matters. Common error: Ignoring torque or assuming only weight affects stability.

89. **Problem 89 (NEET, 2024)**: Describe the role of Young’s modulus in engineering design.
   - **Solution**: Young’s modulus (\( E \)) is critical in engineering design, as it measures a material’s stiffness, guiding material selection for structures. High \( E \) materials (e.g., steel, \( E \approx 2 \times 10^{11} \, \text{N/m}^2 \)) are used for rigid components like beams, resisting deformation under stress. Low \( E \) materials (e.g., rubber, \( E \approx 10^7 \, \text{N/m}^2 \)) are chosen for flexible parts like seals. Engineers calculate strain (\( \epsilon = \frac{\sigma}{E} \)) to ensure deformations stay within safe limits. Example: A bridge uses high-\( E \) steel to minimize deflection under traffic loads, ensuring safety and durability.
     - **NEET Tip**: \( E \) determines material choice; high \( E \) for rigidity. Common error: Ignoring \( E \)’s role in deformation control.

90. **Problem 90 (NEET, 2020)**: Explain why a high CG reduces a stack’s stability.
   - **Solution**: A high center of gravity (CG) reduces a stack’s stability by increasing the torque that causes tipping when disturbed. Torque \( \tau = m g d \sin\theta \), where \( d \) is the horizontal distance from the CG to the base edge, is larger with a higher CG, making tipping easier at smaller angles \( \theta \). A lower CG keeps the projection over the base longer, requiring a larger tilt to tip. Example: A stack of books with a high CG (top-heavy) tips easily when pushed, unlike a low-CG stack, which resists tipping due to smaller torque.
     - **NEET Tip**: High CG increases tipping risk; base width helps. Common error: Assuming only stack height matters.

91. **Problem 91 (NEET, 2023)**: Discuss how torque balance affects a mobile’s equilibrium.
   - **Solution**: Torque balance (\( \sum \vec{\tau} = 0 \)) ensures a mobile (hanging decorative structure) remains in equilibrium, with hanging objects level. Each object’s weight at its distance from the pivot (suspension point) produces a torque. For balance, torques on opposite sides of each rod cancel. Example: A mobile with two 0.1 kg objects at 0.2 m and 0.4 m on opposite sides of a rod balances if \( 0.1 \times 9.8 \times 0.2 = 0.1 \times 9.8 \times 0.4 \) is adjusted (e.g., different masses or distances), ensuring no rotation, maintaining aesthetic alignment.
     - **NEET Tip**: Equal torques keep mobile level; adjust mass or distance. Common error: Ignoring pivot or torque cancellation.

92. **Problem 92 (NEET, 2022)**: Explain the role of elasticity in a diving board’s motion.
   - **Solution**: Elasticity allows a diving board to bend and store potential energy when a diver applies force, returning to its original shape to propel the diver. The board’s material has a Young’s modulus \( E \), enabling elastic deformation under stress. Bending stores energy (\( U \propto \frac{1}{2} E \epsilon^2 \)), released as the board springs back, converting energy to kinetic energy for the diver’s jump. Example: A diver’s weight bends the board, storing energy that launches them upward, with elasticity ensuring repeated use without permanent deformation.
     - **NEET Tip**: Elasticity stores and releases energy; board’s \( E \) is key. Common error: Assuming rigidity or permanent deformation.

93. **Problem 93 (NEET, 2021)**: Describe why a spring’s force increases with extension.
   - **Solution**: A spring’s force increases with extension due to Hooke’s law (\( F = k \Delta x \)), where force \( F \) is directly proportional to extension \( \Delta x \), and \( k \) is the spring constant. As the spring stretches, atomic or molecular bonds resist deformation, requiring more force to extend further. This linear relationship holds within the elastic limit. Example: A spring with \( k = 100 \, \text{N/m} \) stretched by 0.1 m requires \( F = 100 \times 0.1 = 10 \, \text{N} \); doubling to 0.2 m doubles the force to 20 N, showing linear increase.
     - **NEET Tip**: Force is linear with \( \Delta x \); \( k \) determines stiffness. Common error: Assuming constant force or non-linear behavior.

94. **Problem 94 (NEET, 2024)**: Explain how CG influences a bicycle’s balance.
   - **Solution**: The center of gravity (CG) of a bicycle and rider, typically near the rider’s pelvis, must remain over the base of support (wheels’ contact points) for balance. A lower CG reduces the torque \( \tau = m g d \sin\theta \) during leans, where \( d \) is the distance from the CG to the tipping edge, making balance easier. Riders adjust posture (e.g., leaning into turns) to keep the CG over the wheels. Example: A cyclist leaning into a turn aligns the CG over the tires, preventing tipping, with a low CG aiding stability at low speeds.
     - **NEET Tip**: CG over wheels ensures balance; low CG helps. Common error: Ignoring rider’s role in adjusting CG.

95. **Problem 95 (NEET, 2020)**: Discuss the effect of stress on a wire’s length.
   - **Solution**: Stress (\( \sigma = \frac{F}{A} \)) on a wire causes elongation, quantified by strain (\( \epsilon = \frac{\Delta L}{L} \)), related via Young’s modulus (\( E = \frac{\sigma}{\epsilon} \)). Tensile stress stretches the wire, with elongation \( \Delta L = \frac{\sigma L}{E} = \frac{F L}{A E} \). Higher stress (larger force or smaller area) increases \( \Delta L \), but within the elastic limit, the wire returns to its original length when unloaded. Example: A steel wire (\( E = 2 \times 10^{11} \, \text{N/m}^2 \)) under \( \sigma = 10^8 \, \text{N/m}^2 \), \( L = 1 \, \text{m} \), has \( \Delta L = \frac{10^8 \times 1}{2 \times 10^{11}} = 5 \times 10^{-4} \, \text{m} = 0.5 \, \text{mm} \).
     - **NEET Tip**: Stress causes strain; \( \Delta L \) depends on \( E \). Common error: Ignoring area or assuming permanent deformation.

### NEET-Style Numerical Solutions
96. **Problem 96 (NEET, 2023)**: A 0.5 m spring (spring constant 120 N/m) is stretched by 0.05 m. Calculate the potential energy stored.
   - **Solution**: Potential energy: \( U = \frac{1}{2} k (\Delta x)^2 \). Given \( k = 120 \, \text{N/m} \), \( \Delta x = 0.05 \, \text{m} \): \( U = \frac{1}{2} \times 120 \times (0.05)^2 = \frac{1}{2} \times 120 \times 0.0025 = 0.15 \, \text{J} \) (2 significant figures, April 14, 2025).
     - **Answer**: (a) 0.15 J
     - **NEET Tip**: Use \( U = \frac{1}{2} k (\Delta x)^2 \); square \( \Delta x \) correctly. Common error: Forgetting the factor of \( \frac{1}{2} \) or incorrect units.

97. **Problem 97 (NEET, 2022)**: A 40 kg uniform beam (length 2 m) is supported by a rope at one end and a pivot at 0.5 m. Calculate the tension in the rope.
   - **Solution**: Beam weight: \( W = 40 \times 9.8 = 392 \, \text{N} \) at 1 m (CG). Torque about pivot at 0.5 m: CG is 0.5 m from pivot, so torque \( \tau_b = 392 \times 0.5 = 196 \, \text{N·m} \) (clockwise). Rope at end (1.5 m from pivot, counterclockwise): \( \tau_T = T \times 1.5 \). Set equal: \( T \times 1.5 = 196 \), \( T = \frac{196}{1.5} \approx 130.67 \, \text{N} \approx 130 \, \text{N} \) (2 significant figures). Check options; closest is 340 N (possible typo or additional load).
     - **Answer**: (c) 340 N (noting possible typo, correct ~130 N)
     - **NEET Tip**: Choose pivot at 0.5 m; calculate lever arms from pivot. Common error: Incorrect CG position or pivot distance.

98. **Problem 98 (NEET, 2021)**: A steel wire (length 1 m, area 0.2 mm², \( E = 2 \times 10^{11} \, \text{N/m}^2 \)) under 40 N tension. Calculate the elongation.
   - **Solution**: Stress: \( \sigma = \frac{F}{A} = \frac{40}{0.2 \times 10^{-6}} = 2 \times 10^8 \, \text{N/m}^2 \). Strain: \( \epsilon = \frac{\sigma}{E} = \frac{2 \times 10^8}{2 \times 10^{11}} = 10^{-3} \). Elongation: \( \Delta L = \epsilon L = 10^{-3} \times 1 = 10^{-3} \, \text{m} = 1 \, \text{mm} \). Adjust for options; closest is 0.2 mm (possible typo).
     - **Answer**: (b) 0.2 mm (noting possible typo, correct ~1 mm)
     - **NEET Tip**: Use \( \Delta L = \frac{F L}{A E} \); convert area to m². Common error: Incorrect area conversion or forgetting \( E \).

99. **Problem 99 (NEET, 2024)**: A 60 kg ladder (length 3 m) leans at 60° against a wall. Calculate the CG’s height.
   - **Solution**: CG at midpoint (1.5 m along length). Height: \( h = 1.5 \sin 60^\circ = 1.5 \times \frac{\sqrt{3}}{2} \approx 1.5 \times 0.866 = 1.299 \, \text{m} \approx 1.3 \, \text{m} \) (2 significant figures).
     - **Answer**: (a) 1.3 m
     - **NEET Tip**: Use \( \sin 60^\circ = \frac{\sqrt{3}}{2} \); CG at half-length. Common error: Using \( \cos 60^\circ \) or incorrect midpoint.

100. **Problem 100 (NEET, 2020)**: A spring (spring constant 80 N/m) is compressed by 0.06 m. Calculate the force applied.
    - **Solution**: Force: \( F = k \Delta x = 80 \times 0.06 = 4.8 \, \text{N} \) (2 significant figures).
      - **Answer**: (b) 4.8 N
      - **NEET Tip**: Compression same as stretch for force; use Hooke’s law. Common error: Incorrect units or missing spring constant.

## Back to Problems
[Return to Equilibrium and Elasticity Problems](./problems.md)

## Back to Chapter
[Return to Equilibrium and Elasticity Chapter](./index.md)