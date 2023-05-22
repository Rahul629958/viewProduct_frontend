#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

vector<int> rearrange(vector<int> v1,vector<int> v2)
{
    
    int size=v1.size();
    vector<pair<int,int>> v3(size);
    for(int i=0;i<size;i++)
    {
        v3[i].first=v1[i];
        v3[i].second=i;
    }
    sort(v3.begin(),v3.end());
    sort(v2.begin(),v2.end());
    vector<int> res(size);
    for(int i=0;i<size;i++)
    {
        res[v3[i].second]=v2[i];
    }
    return res;

}

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
    int n,k;
    cin>>n>>k;
    vector<int> v1(n);
    vector<int> v2(n);
    for(int i=0;i<n;i++)
    {
        cin>>v1[i];
    }
    for(int i=0;i<n;i++)
    {
        cin>>v2[i];
    }
    vector<int> res= rearrange(v1,v2);
    for(int i=0;i<n;i++)
    {
        cout<<res[i]<<" ";
    }
    cout<<endl;
    }
}