/* 
Exhaustive Search || Brute-Force Search

Generate all possinle solution and select the feasible solution 


// Naive brute force algorith agorithm   exapmle permutaion
solve(parameter){
    generate all posible solutions
    ans  = select most feasible solution 
    return ans;
}

// backtracking
solve(parameters){
    if(solution works ) return solution;
else return solve(modified paramters)
}

Three keys of Backtracking 
    1# Choice 
    2# Constraints 
    3# Goal 


Recursice Backtracking


backtracki(args){
    if(goal reached ) {
        add solution to res;
        return;
    }

    for(i to number of choices ){
        if(choice at I is calid){
            make choice i 
            backtrack(args);
            undo choice i
        }
    }
}




*/